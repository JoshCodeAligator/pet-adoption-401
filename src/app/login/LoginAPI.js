"use server"


// function needs to check if account exists (email exists)
// also needs to check if correct email and password

import query from "@/db/setup/db";

/**
 * Attempts to validate login information. Checks with database of following cases:
 * account not found, incorrect password, correct password
 * @param email email of account
 * @param password password of account
 * @returns {Promise<{found: boolean, error: string, data: number}>} a json object with a found boolean that tells if an account has
 * been found and an error message if found is false.
 */
const validateLogin = async (email, password) => {
	// first check if email exists
	const accountExists = await verifyAccountExists(email)

	// didn't find email in db
	if (!accountExists) {
		return {
			found: false,
			error: "Email not found",
			data: -1
		}
	}

	// now attempt to verify the account by matching password
	const {found, ID} = await verifyLoginDetails(email, password)

	// account verification failed
	if (!found) {
		return {
			found: false,
			error: "Incorrect password",
			data: -1
		}
	}

	// account verification successful
	return {
		found: true,
		error: "",
		data: ID
	}

}

/**
 * Checks if an account associated with email exists
 * @param email email to check account of
 * @returns {Promise<boolean>} if an account with email exists
 */
const verifyAccountExists = async (email) => {
	// check if email exists
	const findEmailResponse = await query(
		'SELECT account_id FROM Account WHERE email = ?',
		[email]
	)

	// if length is 0, account doesn't exist
	return findEmailResponse.length !== 0;
}

/**
 * Verifies login data, if email and password matches
 * @param email email of account
 * @param password password of account
 * @returns {Promise<{found: boolean, ID: number}>} if email and password matches with account email and password,
 * returns true with ID, else false and ID = -1
 */
const verifyLoginDetails = async (email, password) => {
	const verifyLogin = await query(
		'SELECT account_id FROM Account WHERE email = ? AND password = ?',
		[email, password]
	)

	// if length is 0, unable to verify login
	return {
		found: verifyLogin.length !== 0,
		ID: verifyLogin.length !== 0 ? verifyLogin[0].account_id : -1
	}
}

export default validateLogin;

// export {verifyAccountExists, verifyLoginDetails}