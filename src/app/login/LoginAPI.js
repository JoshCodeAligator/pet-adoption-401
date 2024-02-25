"use server"


// function needs to check if account exists (email exists)
// also needs to check if correct email and password

import query from "@/db/setup/db";
import ValidateLoginResponse from "@login/ValidateLoginResponse";

/**
 * Validate with database if account with email and password exists in it.
 * Will check for 2 possible errors: account doesn't exist, or password is incorrect.
 * @returns {Promise<ValidateLoginResponse>} Holds response about verification of login data
 */
const validateLogin = async (email, password) => {
	// first check if email exists
	const accountExists = await verifyAccountExists(email)

	// didn't find email in db
	if (!accountExists) {
		return new ValidateLoginResponse(false, "Email not found")
	}

	// now attempt to verify the account by matching password
	const verifyAccount = await verifyLoginDetails(email, password)

	// account verification failed
	if (!verifyAccount) {
		return new ValidateLoginResponse(false, "Incorrect password")
	}

	// account verification successful
	return new ValidateLoginResponse(true)

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
 * @returns {Promise<boolean>} if email and password matches with account email and password
 */
const verifyLoginDetails = async (email, password) => {
	const verifyLogin = await query(
		'SELECT account_id FROM Account WHERE email = ? AND password = ?',
		[email, password]
	)

	// if length is 0, unable to verify login
	return verifyLogin.length !== 0
}

export default validateLogin;

export {verifyAccountExists, verifyLoginDetails}