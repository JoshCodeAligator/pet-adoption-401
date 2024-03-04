"use client"

import ClientCreateAccountView from "@CreateAccount/ClientCreateAccountView";
import {useState} from "react";
import {createClientAccount} from "@CreateAccount/CreateAccountAPI";
import {useRouter} from "next/navigation";

const ClientCreateAccountController = () => {
	const [errorFlag, setErrorFlag] = useState(false)
	const [error, setError] = useState('')

	const router = useRouter()

	// function to validate create account form
	const validateCreateAccountForm = async (formData) => {
		const firstName = formData.get("first_name")
		const lastName = formData.get("last_name")
		const phone = formData.get("phone")
		const email = formData.get("email")
		const ***REMOVED*** = formData.get("***REMOVED***")
		const confirm_***REMOVED*** = formData.get("confirm_***REMOVED***")


		// TODO: field validation

		const result = await createClientAccount(
			{firstName, lastName, phone, email, ***REMOVED***})

		// Success in client account creation,
		if (result.success) {
			// go to login page to login
			router.push("/login")
			return
		}

		setErrorFlag(true)
		setError(result.error)

	}
	return (
		<ClientCreateAccountView onSubmit={validateCreateAccountForm}
								 errorFlag={errorFlag} errorMessage={error}/>
	)
}

export default ClientCreateAccountController