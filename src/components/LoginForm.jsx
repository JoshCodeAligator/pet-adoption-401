"use client"

import FormInput from "@components/FormInput";

const LoginForm = ({onSubmit, loginErrorFlag, loginErrorMessage}) => {

	// need to be to validate values of email and password

  	return (
		<>
			{/* Log in form */}
			<form action={onSubmit}>
				{/* Email field */}
				<FormInput type="email" name="email" label="Enter your email:"
						   placeholder="PetPursuit@email.com"/>
				<br/>
				{/* password field */}
				<FormInput type="password" name="password" label="Enter your password:"/>
				<br/>
				{/* Login button */}
				<button type="submit">Log In</button>
			</form>

			{/* Display error if there is an error */}
			{loginErrorFlag &&
				<p>
					{loginErrorMessage}
				</p>
			}

		</>
	)
}

export default LoginForm