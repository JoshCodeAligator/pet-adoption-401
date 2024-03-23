"use client"

import {useState} from "react";
import LoginView from "@login/LoginView";
import validateLogin from "@login/LoginAPI";
import {useRouter} from "next/navigation";
import LoginValidationResponse from "@login/LoginValidationResponse";
import {createCookie} from "@/lib";



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
		const {found, error, data} = await validateLogin(email, password)
		// log in success, redirect to home page
		if (found) {
			// set cookie
			await createCookie(data, email)

			router.push("/")
			alert("Log in successful!")

			// might want to set some sort of authentication or cookie with logged in flag to be true
			// and have their account_id and other information passed from the validateLogin function
			return
		}

		// validation failed, set error
		setErrorFlag(true)
		setErrorMessage(error)

	}

	// need some validation for each field?
	// or overall validation done through submit?

	return (
		<LoginView onSubmit={submit} errorFlag={errorFlag} errorMessage={errorMessage}/>
	)
}

export default LoginController