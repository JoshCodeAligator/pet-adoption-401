"use server"

// file for create account API for any type of account creation

import {generateAccountID, generateClientID, generatePhoneID} from "@CreateAccount/APIHelper/GenerateUniqueID";
import {insertAccount, insertClient, insertPhone} from "@CreateAccount/APIHelper/Insert";
import {deleteAccount, deleteClient, deletePhone} from "@CreateAccount/APIHelper/Delete";

const createClientAccount = async ({firstName, lastName, phone, email, ***REMOVED***}) => {
	console.log("Starting createClientAccount, got following from form: ")
	console.log(firstName, lastName, phone, email, ***REMOVED***)

	// declare variables here so can be used within catch scope as well
	let accountID
	let clientID
	let phoneID

	try {

		// generate all ID
		accountID = await generateAccountID();
		clientID = await generateClientID();
		phoneID = await generatePhoneID();

		// for speed might consider doing it concurrently using
		// Promise.all([/* generate function calls go here as array elements */])

		// this will lead to all id generated to be the same (probably)
		// however that doesn't really matter much as long as they are unique to their own tables

		// they won't be the same if we allow for phone numbers to be deleted
		// as then it is possible for a phoneID to be available but not client or account IDs

		// at the moment, it seems id generated are all the same anyway

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
		// so need to catch that exception within insertClient, so we don't catch it here

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
	// upon error, return to client-side failure of insert and server error
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

const createAdminAccount = async ({email, ***REMOVED***}) => {
	console.log("Starting createAdminAccount, got values: ", email, ***REMOVED***)

	let accountID
	let adminID

	try {
		// generate ID
		accountID = await generateAccountID()

	}
	catch (e) {

	}


	// passed all error checks, so success in insert
	return {
		success: true,
		error: ""
	}
}

export {createClientAccount, createAdminAccount}