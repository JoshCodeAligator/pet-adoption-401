"use server"

import query from "@/db/setup/db";

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
 * Runs query to delete a ClientPhone from the database.
 * @param phoneID The phone_id of the phone to delete
 */
async function deletePhone(phoneID) {
	await query(
		'DELETE FROM ClientPhone WHERE phone_id = ?',
		[phoneID]
	)
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

export {deleteAccount, deleteClient, deletePhone}