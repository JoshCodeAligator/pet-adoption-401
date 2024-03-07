"use server"

// file for create account API for any type of account creation

import query, {beginTransaction, commit} from "@/db/setup/db";
import {cat} from "@/app/constants";
const unique_id = require("uniqid")

/**
 * Generates an 8 byte ID
 * @returns {number} 8 byte number
 */
function generateID() {
	const id = unique_id.time()
	// id generated is in base 32
	return parseInt(id, 32)

}

const createClientAccount = async ({firstName, lastName, phone, email, ***REMOVED***}) => {
	console.log("Starting createClientAccount, got following from form: ")
	console.log(firstName, lastName, phone, email, ***REMOVED***)


	let accountID
	let clientID
	let phoneID

	try {

		// generate all ID
		accountID = await generateAccountID();
		clientID = await generateClientID();
		phoneID = await generatePhoneID();

		// await accountID
		// await clientID
		// await phoneID

		// for some reason using await after to have all 3 generates run together doesn't work
		// don't get values in time

		console.log("AccountID: ", accountID)
		console.log("ClientID: ", clientID)
		console.log("PhoneID: ", phoneID)

		// attempt to create all accounts
		const insertAccountResult = await insertAccount(accountID, email, ***REMOVED***)
		const insertClientResult = await insertClient(clientID, firstName, lastName, accountID)
		const insertPhoneResult = await insertPhone(phoneID, clientID, phone)

		// issue with checking errors after running all 3 is the fact that
		// if attempt to inert a new client, however due to email conflict didn't insert a new account
		// ge an error for client as we use a non-existent account_id as the fk
		// so need to catch that error within insertClient so we don't catch it here

		// same deal with insertPhone


		// now check for errors

		if (insertAccountResult === false) {
			await deleteClient(clientID)
			await deletePhone(phoneID)

			return {
				success: false,
				error: "Email already used for an existing account"
			}
		}

		// await insertClientResult
		if (insertClientResult === false) {
			await deleteAccount(accountID)
			await deletePhone(phoneID)

			return {
				success: false,
				error: "Server error while attempting to create a client"
			}
		}
		// await insertPhoneResult
		if (insertPhoneResult === false) {
			await deleteAccount(accountID)
			await deleteClient(clientID)

			return {
				success: false,
				error: "Server error while attempting to save phone number"
			}
		}
	}
	catch (e) {
		if (e.error) {
			console.log(e.error)
		}
		else {
			console.log(e.message)
		}


		// delete everything we possibly inserted just now
		await deleteAccount(accountID)
		await deleteClient(clientID)
		await deletePhone(phoneID)

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
 * Generates a unique account_id that can be used to create a new Account in the database.
 * @returns {Promise<number>} 8 byte integer
 */
async function generateAccountID() {

	let accountID = generateID()

	// keep looping until you find an unused account_id
	while (1) {
		const result = await query(
			'SELECT account_id FROM Account WHERE account_id = ?',
			[accountID]
		)
		// return once found an unused account id
		if (result.length === 0) {
			return accountID;
		}
		// add 1 to id and try
		accountID++
	}
}


/**
 * Attempts to insert a new account into the database.
 * Returns if insert was successful.
 * @param accountID account_id of new account
 * @param email email of new account
 * @param ***REMOVED*** ***REMOVED*** of new account
 * @returns {Promise<boolean>} true if successful in inserting new account. false if db didn't change
 */
async function insertAccount(accountID, email, ***REMOVED***){
	console.log("Started insertAccount")
	const dup_email_code = 'ER_DUP_ENTRY'

	await beginTransaction()
	try {
		// attempt to create a new account
		const insertAccountResult = await query(
			'INSERT INTO Account (account_id, email, ***REMOVED***) VALUES (?, ?, ?)',
			[accountID, email, ***REMOVED***]
		)
		await commit()
		console.log("Finishing normally insertAccount, will return", insertAccountResult.affectedRows > 0)
		// only return true if db actually changed (due to insert just did)

		return insertAccountResult.affectedRows > 0
	}
	catch (e) {
		// if this error occurs, it means attempted to make account with an existing email
		if (e.code === dup_email_code) {
			console.log("Finishing via dup_email_code insertAccount")
			return false
		}
		throw e
	}
}

/**
 * Runs query to delete an account from the database.
 * @param accountID The account_id of the account to delete
 */
async function deleteAccount(accountID) {
	await query(
		'DELETE FROM Account WHERE account_id = ?',
		[accountID]
	)
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
 * Generates a unique client)id that can be used to create a new Client in the database.
 * @returns {Promise<number>} 8 byte integer
 */
async function generateClientID() {
	let clientID = generateID()

	// keep looping until you find an unused client_id
	while (1) {
		const result = await query(
			'SELECT client_id FROM Client WHERE client_id = ?',
			[clientID]
		)

		if (result.length === 0) {
			return clientID;
		}

		clientID++
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

	await beginTransaction()

	try {
		const insertClientResult = await query(
			'INSERT INTO Client (client_id, first_name, last_name, account_id) VALUES (?, ?, ?, ?)',
			[clientID, fName, lName, accountID]
		)
		await commit()

		// check if was able to create new client or not

		console.log("Return from insertClient")
		return insertClientResult.affectedRows > 0;
	}
	catch (e) {
		if (e.errno === sql_error_no) {
			return false
		}
	}

}

/**
 * Runs query to delete a client from the database.
 * @param clientID The client_id of the client to delete
 */
async function deleteClient(clientID) {
	await query(
		'DELETE FROM Client WHERE client_id = ?',
		[clientID]
	)
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
 * Generates a unique phone_id that can be used to create a new ClientPhone in the database.
 * @returns {Promise<number>} 8 byte integer
 */
async function generatePhoneID() {

	let phoneID = generateID()

	// keep looping until you find an unused phone_id
	while (1) {

		const result = await query(
			'SELECT phone_id FROM ClientPhone WHERE phone_id = ?',
			[phoneID]
		)

		if (result.length === 0) {
			return phoneID
		}

		phoneID++
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
		await commit()
		// check if was able to create new clientPhone or not
		console.log("Return from insertPhone")
		return insertPhoneResult.affectedRows > 0;
	}
	catch (e) {
		if (e.errno === sql_error_no) {
			return false
		}
	}
}

/**
 * Runs query to delete a ClientPhone from the database.
 * @param phoneID The phone_id of the phone to delete
 */
async function deletePhone(phoneID) {
	await query(
		'DELETE FROM ClientPhone WHERE phone_id = ?',
		[phoneID]
	)
}

export {createClientAccount}