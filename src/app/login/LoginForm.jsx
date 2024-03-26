"use client"

import FormInput from "@components/FormInput";

const LoginForm = ({onSubmit, loginErrorFlag, loginErrorMessage}) => {

	// need to be to validate values of email and password

  	return (
		<div className="flex flex-col">
			{/* Log in form */}
			<form action={onSubmit} style={{color: 'black', backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
				{/* Email field */}
				<div>
					<FormInput type="email" name="email" label="Enter your email"
							placeholder="petpursuit@email.com"/>
				</div>
				<br/>
				{/* password field */}
				<div>
					<FormInput type="password" name="password" label="Enter your password"
								placeholder={"Password"} style={{borderColor: 'black'}} />
				</div>
				<br/>
				{/* Login button */}
				<div className="flex justify-center">
					<button type="submit" style={{ backgroundColor: 'green', color: 'white',
							padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Sign In</button>
				</div>
			</form>

			{/* Display error if there is an error */}
			<div className="text-red-600 font-extrabold text-2xl text-center pt-5">
			{loginErrorFlag &&
				<p>
					{loginErrorMessage}
				</p>
			}
			</div>
		</div>
	)
}

export default LoginForm