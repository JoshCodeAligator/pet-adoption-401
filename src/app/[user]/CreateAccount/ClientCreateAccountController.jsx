"use client"

import ClientCreateAccountView from "@CreateAccount/ClientCreateAccountView";
import {useState} from "react";

const ClientCreateAccountController = () => {
	const [errorFlag, setErrorFlag] = useState(false)
	const [error, setError] = useState('')



	// function to validate create account form
	const validateCreateAccountForm = async (formData) => {
		const firstName = formData.get("first_name")
		const lastName = formData.get("last_name")
		const phone = formData.get("phone")
		const email = formData.get("email")
		const ***REMOVED*** = formData.get("***REMOVED***")
		const confirm_***REMOVED*** = formData.get("confirm_***REMOVED***")
	}
	return (
		<ClientCreateAccountView onSubmit={validateCreateAccountForm}
								 errorFlag={errorFlag} errorMessage={error}/>
	)
}

export default ClientCreateAccountController