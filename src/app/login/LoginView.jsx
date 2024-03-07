"use client"

import LoginForm from "@components/LoginForm";
import Navbar from "@components/Navbar";

const LoginView = ({onSubmit, errorFlag, errorMessage}) => {

	return (
		<>
			<Navbar/>
			<div className="absolute top-20">
				<LoginForm onSubmit={onSubmit}
						   loginErrorMessage={errorMessage} loginErrorFlag={errorFlag}/>
			</div>

		</>
	)
}

export default LoginView