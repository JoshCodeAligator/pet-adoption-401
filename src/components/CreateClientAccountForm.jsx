import FormInput from "@components/FormInput";
import AccountFormInputs from "@components/AccountFormInputs";
import {firstName, lastName, phone} from "@/app/constants";

// local component for phone number input field
const PhoneFormInput = () => {
	return (
		<div>
			<label htmlFor={phone}>Phone Number</label>
			<br/>
			<input type={"tel"} name={phone} pattern={"[0-9]{3}-[0-9]{3}-[0-9]{4}"}
				   placeholder={"587-111-1111"} style={{color: 'black', border: '1px solid black'}}/>
		</div>

	)
}

const CreateClientAccountForm = ({onSubmit, createErrorFlag, createErrorMessage}) => {

	// field validation done outside this component

	return (
		<div>
			{/*	form to create client account */}
			<form action={onSubmit} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
				{/* Client information */}

				<br></br>
				{/* First name */}
				<div style={{color: 'black', paddingTop: '10px'}} className="flex justify-center">
					<FormInput type={"text"} name={firstName} label={"First Name"}
						   placeholder={"First name"}/>
				</div>

				{/*Last Name*/}
				<div style={{color: 'black', paddingTop: '15px'}} className="flex justify-center">
					<FormInput type={"text"} name={lastName} label={"Last Name"}
						   placeholder={"Last name"}/>
				</div>

				{/* Phone Number */}
				<div style={{color: 'black', paddingTop: '15px'}} className="flex justify-center">
					<PhoneFormInput/>
				</div>

				{/* Account information */}
				<AccountFormInputs/>
				<br></br>

				{/*	submit button */}
				<div style={{paddingTop: '15px'}} className="flex justify-center">
					<button type={"submit"} style={{ backgroundColor: 'green', color: 'white',
						padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
						Create Account</button>
				</div>
				
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