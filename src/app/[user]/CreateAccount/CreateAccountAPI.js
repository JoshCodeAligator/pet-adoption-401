"use server"

// file for create account API for any type of account creation

import query from "@/db/setup/db";


const createClientAccount = async ({fName, lName, phone, email, ***REMOVED***}) => {
	try {
		// first attempt to create a new account
		const insertAccountResult = insertAccount(email, ***REMOVED***)

		// failed to insert new account
		if (!insertAccountResult) {
			return {
				success: false,
				error: "Account already exists"
			}
		}

		// now attempt to add new client and client phone into db

		// get accountID of account just inserted
		const accountID = await fetchAccountID(email, ***REMOVED***)

		console.log("AccountID: %d", accountID)

		if (accountID === -1) {
			// for some reason failed to get account that was just created
			// so return a server error
			return {
				success: false,
				error: "Server error"
			}
		}



		// attempt to insert a client
		const insertClientResult = await insertClient(fName, lName, accountID)

		// check if failed to add client to db
		if (!insertClientResult) {
			// need to remove account that was just created
			await query(
				'DELETE FROM Account WHERE account_id = ?',
				[accountID]
			)

			// return that failed to create client
			return {
				success: false,
				error: "Server client insert error"
			}
		}

		// now attempt to add phone number

		// need to get client_id
		const clientID = await fetchClientID(fName, lName, accountID)

		console.log(`ClientID: ${clientID}`)

		if (clientID === -1) {
			// unable to fetch client, some sort of server error
			return {
				success: false,
				error: "Server error"
			}
		}

		// now attempt to inert phone number
		const insertPhoneResult = await insertPhone(clientID, phone)

		if (!insertPhoneResult) {
			// some sort of server error
			// there isn't really any restrictions to ClientPhone

			// so before returning need to delete account and client
			await query(
				'DELETE FROM Account WHERE account_id = ?',
				[accountID]
			)

			await query(
				'DELETE FROM Client WHERE client_id = ?',
				[clientID]
			)

			return {
				success: false,
				error: "Server client phone insert error"
			}
		}
	}
	catch (e) {
		console.log(e.error)

		return {
			success: false,
			error: "Server error"
		}
	}

	// reaching here means success in account creation
	return {
		success: true,
		error: ""
	}
}


/**
 * Attempts to insert a new account into the database.
 * Returns if insert was successful.
 * @param email email of new account
 * @param ***REMOVED*** ***REMOVED*** of new account
 * @returns {Promise<boolean>} true if successful in inserting new account. false if db didn't change
 */
async function insertAccount(email, ***REMOVED***){
	// attempt to create a new account
	const insertAccountResult = await query(
		'INSERT INTO Account (email, ***REMOVED***) VALUES (?, ?)',
		[email, ***REMOVED***]
	)

	// check if unable to create a new account
	return insertAccountResult.affectedRows !== 0;
}

/**
 * Fetches an account_id from database.
 * @param email email of account
 * @param ***REMOVED*** ***REMOVED*** of account
 * @returns {Promise<number>} account_id or -1 if account not found
 */
async function fetchAccountID(email, ***REMOVED***) {
	const selectAccountResult = await query(
		'SELECT * FROM Account WHERE email = ? AND ***REMOVED*** = ?',
		[email, ***REMOVED***]
	)
	if (selectAccountResult.length === 0)
		return -1
	return selectAccountResult[0].account_id
}

/**
 * Attempts to insert a new client into the database. Returns if successful or not.
 * @param fName first name of new client
 * @param lName last name of new client
 * @param account_id account_id of new client
 * @returns {Promise<boolean>} true if new client added. false if no change to database.
 */
async function insertClient(fName, lName, account_id) {
	const insertClientResult = await query(
		'INSERT INTO Client (first_name, last_name, account_id) VALUES (?, ?, ?)',
		[fName, lName, account_id]
	)
	// check if was able to create new client or not
	return insertClientResult.affectedRows !== 0;
}

/**
 * Fetches a client id from the database.
 * @param fName first name of client
 * @param lName last name of client
 * @param account_id account_id of client
 * @returns {Promise<number>} client_id or -1 if client not found
 */
async function fetchClientID(fName, lName, account_id) {
	const selectClientResult = await query(
		'SELECT client_id FROM Client WHERE first_name = ? AND last_name = ? AND account_id = ?',
		[fName, lName, account_id]
	)

	if (selectClientResult.length === 0) {
		return -1
	}
	// assume (first_name, last_name, account_id) are unique in db, thus only return 1 client
	return selectClientResult[0].client_id
}

/**
 * Attempts to insert a new client phone number into the database.
 * @param client_id client_id of phone number belonging to
 * @param phone phone number
 * @returns {Promise<boolean>} true if inserted a new phone number. false if no change to database,
 */
async function insertPhone(client_id, phone) {
	const insertPhoneResult = await query(
		'INSERT INTO ClientPhone (client_id, phone) VALUES (?, ?)',
		[client_id, phone]
	)
	// check if was able to create new client or not
	return insertPhoneResult.affectedRows !== 0;

}

export {createClientAccount}