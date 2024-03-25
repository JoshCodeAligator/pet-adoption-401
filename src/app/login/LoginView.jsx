"use client"

import LoginForm from "@login/LoginForm";
import Navbar from "@components/Navbar";

const LoginView = ({onSubmit, errorFlag, errorMessage}) => {

	return (
		<>
			<Navbar/>
			<div className="h-screen flex justify-center items-center">
				<LoginForm onSubmit={onSubmit}
						   loginErrorMessage={errorMessage} loginErrorFlag={errorFlag}/>
			</div>

		</>
	)
}

export default LoginView