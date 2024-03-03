"use server"


// function needs to check if account exists (email exists)
// also needs to check if correct email and ***REMOVED***

import query from "@/db/setup/db";

/**
 * Attempts to validate login information. Checks with database of following cases:
 * account not found, incorrect ***REMOVED***, correct ***REMOVED***
 * @param email email of account
 * @param ***REMOVED*** ***REMOVED*** of account
 * @returns {Promise<{found: boolean, error: string}>} a json object with a found boolean that tells if an account has
 * been found and an error message if found is false.
 */
const validateLogin = async (email, ***REMOVED***) => {
	// first check if email exists
	const accountExists = await verifyAccountExists(email)

	// didn't find email in db
	if (!accountExists) {
		return {
			found: false,
			error: "Email not found"
		}
	}

	// now attempt to verify the account by matching ***REMOVED***
	const verifyAccount = await verifyLoginDetails(email, ***REMOVED***)

	// account verification failed
	if (!verifyAccount) {
		return {
			found: false,
			error: "Incorrect ***REMOVED***"
		}
	}

	// account verification successful
	return {
		found: true,
		error: ""
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
 * Verifies login data, if email and ***REMOVED*** matches
 * @param email email of account
 * @param ***REMOVED*** ***REMOVED*** of account
 * @returns {Promise<boolean>} if email and ***REMOVED*** matches with account email and ***REMOVED***
 */
const verifyLoginDetails = async (email, ***REMOVED***) => {
	const verifyLogin = await query(
		'SELECT account_id FROM Account WHERE email = ? AND ***REMOVED*** = ?',
		[email, ***REMOVED***]
	)

	// if length is 0, unable to verify login
	return verifyLogin.length !== 0
}

export default validateLogin;

// export {verifyAccountExists, verifyLoginDetails}