import FormInput from "@components/FormInput";
import AccountFormInputs from "@components/AccountFormInputs";
import {firstName, lastName, phone} from "@/app/constants";

// local component for phone number input field
const PhoneFormInput = () => {
	return (
		<div>
			<label htmlFor={phone} >Phone Number</label>
			<br/>
			<input type={"tel"} name={phone} pattern={"[0-9]{3}-[0-9]{3}-[0-9]{4}"}
				   placeholder={"587-111-1111"}/>
		</div>

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

				{/*Last Name*/}
				<FormInput type={"text"} name={lastName} label={"Last Name"}
						   placeholder={"Last"}/>

				{/* Phone Number */}
				<PhoneFormInput/>

				{/* Account information */}
				<AccountFormInputs/>

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