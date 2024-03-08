"use server"

import query from "@/db/setup/db";
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

export {generateClientID, generateAccountID, generatePhoneID};
