"use client"

import Navbar from "@components/Navbar";

const LoginForm = ({onSubmit, loginErrorFlag, loginErrorMessage}) => {

	// need to be to validate values of email and password
	const submit = (formData) => {
		alert(`Submit: ${formData.get('email')}, ${formData.get('password')}`)
	}

  	return (
		<>
			<Navbar/>
			{/* Log in form */}
			<form action={submit} className="absolute top-20">
				{/* Email field */}
				<label htmlFor="email">Enter your email:</label>
				<input type="email" name="email"/>
				<br/>

				{/* password field */}
				<label htmlFor="password">Enter your password:</label>
				<input type="password" name="password"/>
				<br/>

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