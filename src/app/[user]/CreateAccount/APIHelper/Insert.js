"use server"

import query from "@/db/setup/db";

/**
 * Attempts to insert a new account into the database.
 * Returns if insert was successful.
 * @param accountID account_id of new account
 * @param email email of new account
 * @param password password of new account
 * @returns {Promise<boolean>} true if successful in inserting new account. false if db didn't change
 */
async function insertAccount(accountID, email, password) {
	console.log("Started insertAccount")
	const dup_email_code = 'ER_DUP_ENTRY'

	// await beginTransaction()
	try {
		// attempt to create a new account
		const insertAccountResult = await query(
			'INSERT INTO Account (account_id, email, password) VALUES (?, ?, ?)',
			[accountID, email, password]
		)
		// await commit()
		console.log("Finishing normally insertAccount, will return", insertAccountResult.affectedRows > 0)
		// only return true if db actually changed (due to insert just did)

		return insertAccountResult.affectedRows > 0
	} catch (e) {
		// if this error occurs, it means attempted to make account with an existing email
		if (e.code === dup_email_code) {
			console.log("Finishing via dup_email_code insertAccount")
			return false
		}
		throw e
	}
}

/**
 * Attempts to insert a new client into the database. Returns if successful or not.
 * @param clientID client_id of new client
 * @param fName first name of new client
 * @param lName last name of new client
 * @param accountID account_id of new client
 * @returns {Promise<boolean>} true if new client added. false if no change to database.
 */
async function insertClient(clientID, fName, lName, accountID) {
	console.log("Started insertClient")

	// sql errno for attempting to insert with an unknown fk
	const sql_error_no = 1452

	// await beginTransaction()

	try {
		const insertClientResult = await query(
			'INSERT INTO Client (client_id, first_name, last_name, account_id) VALUES (?, ?, ?, ?)',
			[clientID, fName, lName, accountID]
		)
		// await commit()

		// check if was able to create new client or not

		console.log("Return from insertClient")
		return insertClientResult.affectedRows > 0;
	}
	catch (e) {
		if (e.errno === sql_error_no) {
			return false
		}
		throw e
	}

}

/**
 * Attempts to insert a new client phone number into the database.
 * @param phoneID phone_id of the new client phone
 * @param client_id client_id of phone number belonging to
 * @param phone phone number
 * @returns {Promise<boolean>} true if inserted a new phone number. false if no change to database,
 */
async function insertPhone(phoneID, client_id, phone) {
	console.log("Started insertPhone")

	// sql errno for attempting to insert with an unknown fk
	const sql_error_no = 1452

	try {
		const insertPhoneResult = await query(
			'INSERT INTO ClientPhone (phone_id, phone, client_id) VALUES (?, ?, ?)',
			[phoneID, phone, client_id]
		)
		// await commit()
		// check if was able to create new clientPhone or not
		console.log("Return from insertPhone")
		return insertPhoneResult.affectedRows > 0;
	}
	catch (e) {
		if (e.errno === sql_error_no) {
			return false
		}
		throw e
	}
}

/**
 * Attempts to insert a new admin to the database. Returns if it was successful or not
 * @param adminID admin_id of new admin
 * @param accountID account_id of new admin
 * @param centreID centre_id of new admin
 * @return {Promise<boolean>} true if new admin was inserted. false if database was unchanged.
 */
async function insertAdmin(adminID, accountID, centreID) {
	console.log("Started insertAdmin")

	// sql errno for attempting to insert with an unknown fk
	const sql_error_no = 1452

	// await beginTransaction()

	try {
		const insertAdminResult = await query(
			'INSERT INTO Admin (admin_id, account_id, centre_id) VALUES (?, ?, ?)',
			[adminID, accountID, centreID]
		)
		// await commit()

		// check if was able to create new client or not

		console.log("Return from insertAdmin")
		return insertAdminResult.affectedRows > 0;
	}
	catch (e) {
		if (e.errno === sql_error_no) {
			return false
		}
		throw e
	}
}

/**
 * Attempts to insert a new rescue centre into the database. Returns if it was successful or not.
 * @param centreID centre_id of new rescue centre
 * @param name name of new rescue centre
 * @param address address of new rescue centre
 * @param phone phone of new rescue centre
 * @return {Promise<boolean>} true if new centre inserted. false if database was unchanged
 */
async function insertRescueCentre(centreID, name, address, phone) {
	console.log("Started insertRescueCentre")

	// sql errno for attempting to insert with an unknown fk
	// const sql_error_no = 1452

	// await beginTransaction()

	try {
		const insertCentreResult = await query(
			'INSERT INTO RescueCentre (centre_id, name, address, phone) VALUES (?, ?, ?, ?)',
			[centreID, name, address, phone]
		)
		// await commit()

		// check if was able to create new client or not

		console.log("Return from insertRescueCentre")
		return insertCentreResult.affectedRows > 0;
	}
	catch (e) {
		// if (e.errno === sql_error_no) {
		// 	return false
		// }
		throw e
	}

}

export {insertAccount, insertClient, insertPhone, insertRescueCentre, insertAdmin}