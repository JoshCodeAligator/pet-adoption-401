"use client"

import Navbar from "@components/Navbar";
import FormInput from "@components/FormInput";

const LoginForm = ({onSubmit, loginErrorFlag, loginErrorMessage}) => {

	// need to be to validate values of email and password

  	return (
		<>
			<Navbar/>
			{/* Log in form */}
			<form action={onSubmit} className="absolute top-20">
				{/* Email field */}
				<FormInput type="email" name="email" label="Enter your email:"
						   placeholder="PetPursuit@email.com"/>

				{/* password field */}
				<FormInput type="password" name="password" label="Enter your password:"/>

				{/* Login button */}
				<button type="submit">Log In</button>
			</form>

			{/* Display error if there is an error */}
			{loginErrorFlag &&
				<p className="accent-red-600">
					{loginErrorMessage}
				</p>
			}

		</>
	)
}

export default LoginForm