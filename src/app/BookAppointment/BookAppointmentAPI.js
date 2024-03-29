"use server"

// Need a function for possible times
// db only stores booked times

import query from "@/db/setup/db";

export async function getBookedTimesOfWeek(weekStartDate, petID) {

	// because mySQL BETWEEN is inclusive, only add 6 days to start, (not 7)
	let weekEndDate = new Date(weekStartDate)
	weekEndDate.setDate(weekEndDate.getDate() + 6)

	const [startDate, endDate] = await Promise.all([
		convertJSDateToMySQLDate(weekStartDate),
		convertJSDateToMySQLDate(weekEndDate)
	])


	try {
		const bookedTimesResult = await query(
			'SELECT date, start_time FROM ' +
			'((RescueCentre INNER JOIN Pet ON Pet.centre_id = RescueCentre.centre_id) ' +
			'INNER JOIN Appointment ON Appointment.centre_id = RescueCentre.centre_id) ' +
			'WHERE Pet.pet_id = ? AND ' +
			'Appointment.date BETWEEN ? AND ?' +
			'ORDER BY date, start_time ASC',
			[petID, startDate, endDate]
		)
		console.log("Within getBookedTimesOfWeekAPI call: ", startDate, endDate)
		console.log(bookedTimesResult)

		// bookedTimesResult should be an array of json {date: Date, start_time: string}
		return {
			success: true,
			error: "",
			data: bookedTimesResult
		}
	}
	catch (e) {
		console.log(e)

		const error = e.error ? e.error : e.message

		return {
			success: false,
			error: error,
			data: []
		}
	}

}

/**
 * function to convert js date objects to MySQL date object
 * @param date a js date object
 * @return {Promise<string>}
 */
export async function convertJSDateToMySQLDate(date) {
	return date.toISOString().slice(0, 10)
}


// a function to make a new appointment

export async function insertAppointment(date, time, petID, accountID) {
	// a missing piece of information needed is centreID, which can be found using petID

	const getCentreID =  query(
		'SELECT centre_id FROM Pet WHERE pet_id = ?',
		[petID]
	)
	// no need for error checking as accountID must exist as petID exists (assuming calling this from a valid petID page)

	const getClientID = query(
		'SELECT client_id FROM Client WHERE account_id = ?',
		[accountID]
	)
	// also no need for error checking here

	// also need to convert date
	const convertDate = convertJSDateToMySQLDate(date)


	const [centreIDResult, clientIDResult, mysqlDate] = await Promise.all(
		[getCentreID, getClientID, convertDate]
	)

	console.log("Within Insert Appointment, date conversion: ", date, "->", mysqlDate)

	const centreID = centreIDResult[0].centre_id
	const clientID = clientIDResult[0].client_id

	console.log("Date being booked: ", mysqlDate)

	const insertResult = await query(
		'INSERT INTO Appointment (date, start_time, client_id, centre_id, pet_id, slot_no) VALUES (?, ?, ?, ?, ?, ?)',
		[mysqlDate, time, clientID, centreID, petID, 1]
	)

	// return if insert successful or not
	return insertResult.affectedRows !== 0
}

export async function updatePetStatusToBooked(petID) {
	const booked = "booked"
	await query(
		'UPDATE Pet SET status = ? WHERE pet_id = ?',
		[booked, petID]
	);
}

/**
 * Checks if a pet with petID exists or not.
 * @param petID the petID of potential pet
 * @return {Promise<boolean>} true if pet_id found within database
 */
export async function petExists(petID) {
	// use for checking if we want to display a 404 or not
	// as don't want bookings for non-existent pets

	const fetchPetResult = await query(
		'SELECT pet_id FROM Pet WHERE pet_id = ?',
		[petID]
	)

	return fetchPetResult.length !== 0;
}
