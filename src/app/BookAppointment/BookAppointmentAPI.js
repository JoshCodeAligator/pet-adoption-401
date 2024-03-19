"use server"

// Need a function for possible times
// db only stores booked times

import query from "@/db/setup/db";

export async function getBookedTimesOfWeek(weekStartDate, centreID) {

	// because mySQL BETWEEN is inclusive, only add 6 days to start, (not 7)
	let weekEndDate = new Date(weekStartDate)
	weekEndDate.setDate(weekEndDate.getDate() + 6)


	const startDate = convertJSDateToMySQLDate(weekStartDate)
	const endDate = convertJSDateToMySQLDate(weekEndDate)

	console.log(startDate, endDate)

	try {
		const bookedTimesResult = await query(
			'SELECT date, start_time FROM Appointment WHERE centre_id = ? AND (date BETWEEN ? AND ?)',
			[centreID, startDate, endDate]
		)

		console.log(bookedTimesResult)

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

// helper function to convert js date objects to MySQL datetime objects
function convertJSDateToMySQLDate(date) {
	return date.toISOString().slice(0, 10)
}

// a function to make a new appointment
// possibly a new client (if client is a guest)
