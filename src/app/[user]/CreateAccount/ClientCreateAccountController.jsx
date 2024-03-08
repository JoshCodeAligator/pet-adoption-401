"use client"

import ClientCreateAccountView from "@CreateAccount/ClientCreateAccountView";
import {useState} from "react";
import {createClientAccount} from "@CreateAccount/CreateAccountAPI";
import {useRouter} from "next/navigation";
import {confirm_***REMOVED***, email, firstName, lastName, ***REMOVED***, phone} from "@/app/constants";

const ClientCreateAccountController = () => {
	const [errorFlag, setErrorFlag] = useState(false)
	const [error, setError] = useState('')

	const router = useRouter()

	/**
	 * Validates create account form by checking value of its fields.
	 * Will set both errorFlag and error if it encounters an error and stop validation.
	 * If no issues with value in fields, then this function won't do anything.
	 * Will set first error it finds.
	 * Meaning it is possible if there is more than 1 error, it doesn't tell all errors.
	 * It will only tell 1 error.
	 * @param firstName data from firstName field
	 * @param lastName data from lastName field
	 * @param phone data from phone field
	 * @param email data from email field
	 * @param ***REMOVED*** data from ***REMOVED*** field
	 * @param confirm_***REMOVED*** data from confirm_***REMOVED*** field
	 * @return {boolean} true if no issues with fields (error not set). false otherwise.
	 */
	const validateCreateAccountForm = ({firstName, lastName, phone, email, ***REMOVED***, confirm_***REMOVED***}) => {
		// first go check all fields are filled
		// no need to check for confirm ***REMOVED*** as it isn't filled out, then it won't match ***REMOVED***
		if (!firstName || !lastName || !phone || !email || !***REMOVED***) {
			setErrorFlag(true)
			setError("Fill out all fields")
			console.log("Not all fields are filled out.")
			return false
		}

		// check ***REMOVED*** and confirm ***REMOVED*** match
		if (***REMOVED*** !== confirm_***REMOVED***) {
			setErrorFlag(true)
			setError("Password and Confirm Password needs to be the same")
			console.log("Confirm ***REMOVED*** doesn't match")
			return false
		}

		console.log("No issues with client creation form fields.")

		// might want to add more validation,
		// like character limits to match database column limits for the field

		return true
	}

	/**
	 * Handles submitting of create account form.
	 * @param formData data from the form
	 */
	const submitCreateAccountForm = async (formData) => {
		// clear errorFlag, so when user tries again and passes, errorFlag is still not true
		// validation function only sets errorFlag, never resets it
		setErrorFlag(false)
		setError('')

		// object with data for each field of form
		const formFields = {
			 firstName : formData.get(firstName),
			 lastName : formData.get(lastName),
			 phone : formData.get(phone),
			 email : formData.get(email),
			 ***REMOVED*** : formData.get(***REMOVED***),
			 confirm_***REMOVED*** : formData.get(confirm_***REMOVED***)
		}

		// if an error was set during validation, don't continue and try to create an account
		if (!validateCreateAccountForm(formFields)) {
			return
		}

		const result = await createClientAccount(formFields)

		console.log("Done executing Create New Account button")
		console.log(result)

		// Success in client account creation,
		if (result.success) {
			alert("Client account created")
			// go to login page to login
			router.push("/login")
			return
		}

		setErrorFlag(true)
		setError(result.error)
	}
	return (
		<ClientCreateAccountView onSubmit={submitCreateAccountForm}
								 errorFlag={errorFlag} errorMessage={error}/>
	)
}

export default ClientCreateAccountController