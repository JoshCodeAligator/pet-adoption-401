"use client"

import {useState} from "react";
import LoginView from "@login/LoginView";
import {verifyAccountExists, verifyLoginDetails} from "@login/LoginAPI";
import {useRouter} from "next/navigation";



const LoginController = () => {
	const router = useRouter()

	const [errorFlag, setErrorFlag] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')

	const submit = async (formData) => {
		// reset error flag
		// setErrorFlag(false)

		const email  = formData.get('email')
		const ***REMOVED*** = formData.get('***REMOVED***')

		// validate login

		// first check if found account
		const accountExists = await verifyAccountExists(email)

		if (!accountExists) {
			// set error for account not existing
			setErrorFlag(true)
			setErrorMessage("Email not found")
			return
		}

		// now verify ***REMOVED***
		const correctPassword = await verifyLoginDetails(email, ***REMOVED***)
		// it seems that for some reason, it returns true even if wrong case
		// meaning for some reason ***REMOVED*** is case-insensitive (need fix)


		// log in success, redirect to home page
		if (correctPassword) {
			router.push("/")
			alert("Log in successful!")

			// might want to set some sort of authentication or cookie with logged in flag to be true
			// and have their account_id with it
			return
		}


		// validation failed, set error
		setErrorFlag(true)
		setErrorMessage("Incorrect ***REMOVED***")

	}

	// need some validation for each field?
	// or overall validation done through submit?

	return (
		<LoginView onSubmit={submit} errorFlag={errorFlag} errorMessage={errorMessage}/>
	)
}

export default LoginController