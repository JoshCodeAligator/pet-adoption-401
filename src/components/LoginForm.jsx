"use client"

import FormInput from "@components/FormInput";

const LoginForm = ({onSubmit, loginErrorFlag, loginErrorMessage}) => {

	// need to be to validate values of email and ***REMOVED***

  	return (
		<>
			{/* Log in form */}
			<form action={onSubmit}>
				{/* Email field */}
				<FormInput type="email" name="email" label="Enter your email:"
						   placeholder="PetPursuit@email.com"/>
				<br/>
				{/* ***REMOVED*** field */}
				<FormInput type="***REMOVED***" name="***REMOVED***" label="Enter your ***REMOVED***:"/>
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