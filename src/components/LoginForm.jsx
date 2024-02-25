"use client"

import Navbar from "@components/Navbar";
import FormInput from "@components/FormInput";

const LoginForm = ({onSubmit, loginErrorFlag, loginErrorMessage}) => {

	// need to be to validate values of email and ***REMOVED***

  	return (
		<>
			<Navbar/>

			<div className="absolute top-20">
				{/* Log in form */}
				<form action={onSubmit}>
					{/* Email field */}
					<FormInput type="email" name="email" label="Enter your email:"
							   placeholder="PetPursuit@email.com"/>

					{/* ***REMOVED*** field */}
					<FormInput type="***REMOVED***" name="***REMOVED***" label="Enter your ***REMOVED***:"/>

					{/* Login button */}
					<button type="submit">Log In</button>
				</form>

				{/* Display error if there is an error */}
				{loginErrorFlag &&
					<p>
						{loginErrorMessage}
					</p>
				}
			</div>

		</>
	)
}

export default LoginForm