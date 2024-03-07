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

		const formFields = {
			 firstName : formData.get("first_name"),
			 lastName : formData.get("last_name"),
			 phone : formData.get("phone"),
			 email : formData.get("email"),
			 password : formData.get("password"),
			 confirm_password : formData.get("confirm_password")
		}

		// TODO: field validation

		const result = await createClientAccount(formFields)

		console.log("Done executing Create New Account button")
		console.log(result)

		// Success in client account creation,
		if (result.success) {
			// go to login page to login
			router.push("/login")
			return
		}

		setErrorFlag(true)
		setError(result.error)
		router.refresh()
	}
	return (
		<ClientCreateAccountView onSubmit={validateCreateAccountForm}
								 errorFlag={errorFlag} errorMessage={error}/>
	)
}

export default ClientCreateAccountController