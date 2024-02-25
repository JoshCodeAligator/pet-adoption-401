"use client"

import LoginForm from "@components/LoginForm";
import {useState} from "react";


const Login = () => {
	const [errorFlag, setErrorFlag] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')


	const submit = (formData) => {
		alert(`Submitted: ${formData.get('email')}, ${formData.get('***REMOVED***')}`)
	}

	return (
		<>
			<LoginForm onSubmit={submit}
					   loginErrorMessage={errorMessage} loginErrorFlag={errorFlag}/>
		</>
	)
}

export default Login