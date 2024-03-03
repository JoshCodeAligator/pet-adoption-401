import FormInput from "@components/FormInput";

const CreateClientAccountForm = ({onSubmit, createErrorFlag, createErrorMessage}) => {

	// field validation done outside this component

	return (
		<>
			{/*	form to create client account */}
			<form action={onSubmit}>
				{/* First name */}
				<FormInput type={"text"} name={"first_name"} label={"First Name"}
						   placeholder={"First"}/>

				{/* Add a small bit of space between first and last name fields in same line */}
				<span>	</span>

				{/*Last Name*/}
				<FormInput type={"text"} name={"last_name"} label={"Last Name"}
						   placeholder={"Last"}/>
				<br/>

				{/* email */}
				<FormInput type={"email"} name={"email"} label={"Email"}
						   placeholder={"PetPursuit@email.com"}/>
				<br/>
				{/* password */}
				<FormInput type={"password"} name={"password"} label={"Password"}/>
				<br/>
				{/* confirm password */}
				<FormInput type={"password"} name={"confirm-password"} label={"Confirm Password"}/>
				<br/>

				{/*	submit button */}
				<button type={"submit"}>Create New Client Account</button>
			</form>

			{/* Display error if there is an error */}
			{createErrorFlag &&
				<p>
					{createErrorMessage}
				</p>
			}
		</>
	)
}

export default CreateClientAccountForm