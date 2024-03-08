import FormInput from "@components/FormInput";
import AccountFormInputs from "@components/AccountFormInputs";
import {firstName, lastName, phone} from "@/app/constants";

// local component for phone number form input
const PhoneFormInput = () => {
	return (
		<input type={"tel"} name={phone} pattern={"[0-9]{3}-[0-9]{3}-[0-9]{4}"}
			   placeholder={"587-111-1111"}/>
	)
}

const CreateClientAccountForm = ({onSubmit, createErrorFlag, createErrorMessage}) => {

	// field validation done outside this component

	return (
		<div>
			{/*	form to create client account */}
			<form action={onSubmit}>
				{/* Client information */}

				{/* First name */}
				<FormInput type={"text"} name={firstName} label={"First Name"}
						   placeholder={"First"}/>

				{/* Add a small bit of space between first and last name fields in same line */}
				<span>	</span>

				{/*Last Name*/}
				<FormInput type={"text"} name={lastName} label={"Last Name"}
						   placeholder={"Last"}/>
				<br/>

				{/* Phone Number */}
				<PhoneFormInput/>
				<br/>

				{/* Account information */}
				<AccountFormInputs/>
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
		</div>
	)
}

export default CreateClientAccountForm