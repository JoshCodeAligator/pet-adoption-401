"use client"

import LoginForm from "@components/LoginForm";
import {useState} from "react";


const Login = () => {
	const [errorFlag, setErrorFlag] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')

	const onSubmit = async () => {
		alert("Attempted Login")
	}

	return (
		<>
			<LoginForm onSubmit={onSubmit}
					   loginErrorMessage={errorMessage} loginErrorFlag={errorFlag}/>
		</>
	)
}

export default Login