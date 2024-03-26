"use client"

import LoginForm from "@login/LoginForm";
import Navbar from "@components/Navbar";

const LoginView = ({onSubmit, errorFlag, errorMessage}) => {

	return (
		<>
			<Navbar/>
			<div className="background">
				 {/* spans for the animated background */}
				 <span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				{/*  end of animated background */}
			</div>
			<div className="h-screen flex justify-center items-center">
				<LoginForm onSubmit={onSubmit}
						   loginErrorMessage={errorMessage} loginErrorFlag={errorFlag}/>
			</div>

		</>
	)
}

export default LoginView