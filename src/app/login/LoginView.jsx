"use client"

import LoginForm from "@components/LoginForm";

const LoginView = ({onSubmit, errorFlag, errorMessage}) => {

	return (
		<>
			<LoginForm onSubmit={onSubmit}
					   loginErrorMessage={errorMessage} loginErrorFlag={errorFlag}/>
		</>
	)
}

export default LoginView