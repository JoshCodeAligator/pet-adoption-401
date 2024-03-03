"use client"

import {useState} from "react";
import LoginView from "@login/LoginView";
import validateLogin from "@login/LoginAPI";
import {useRouter} from "next/navigation";
import LoginValidationResponse from "@login/LoginValidationResponse";



const LoginController = () => {
	const router = useRouter()

	const [errorFlag, setErrorFlag] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')

	const submit = async (formData) => {
		// reset error flag
		// setErrorFlag(false)

		const email  = formData.get('email')
		const password = formData.get('password')

		// validate login

		const validationResponse = LoginValidationResponse.objectFromJson(await validateLogin(email, password))

		// log in success, redirect to home page
		if (validationResponse.found) {
			router.push("/")
			alert("Log in successful!")

			// might want to set some sort of authentication or cookie with logged in flag to be true
			// and have their account_id with it
			return
		}

		// validation failed, set error
		setErrorFlag(true)
		setErrorMessage(validationResponse.error)

	}

	// need some validation for each field?
	// or overall validation done through submit?

	return (
		<LoginView onSubmit={submit} errorFlag={errorFlag} errorMessage={errorMessage}/>
	)
}

export default LoginController