import ClientCreateAccountView from "@CreateAccount/ClientCreateAccountView";
import {useState} from "react";

const ClientCreateAccountController = () => {
	const [errorFlag, setErrorFlag] = useState(false)
	const [error, setError] = useState('')



	// function to validate create account form
	const validateCreateAccountForm = async (formData) => {
		const firstName = formData.get("first_name")
		const lastName = formData.get("last_name")
		const email = formData.get("email")
		const password = formData.get("password")
		const confirm_password = formData.get("confirm_password")
	}
	return (
		<ClientCreateAccountView onSubmit={validateCreateAccountForm}
								 errorFlag={errorFlag} errorMessage={error}/>
	)
}

export default ClientCreateAccountController