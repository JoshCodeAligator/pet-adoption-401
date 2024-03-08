import FormInput from "@components/FormInput";
import {confirm_***REMOVED***, email, ***REMOVED***} from "@/app/constants";

const AccountFormInputs = () => {
	return (
		<>
			{/* email */}
			<FormInput type={"email"} name={email} label={"Email"}
					   placeholder={"PetPursuit@email.com"}/>
			<br/>
			{/* ***REMOVED*** */}
			<FormInput type={"***REMOVED***"} name={***REMOVED***} label={"Password"}/>
			<br/>
			{/* confirm ***REMOVED*** */}
			<FormInput type={"***REMOVED***"} name={confirm_***REMOVED***} label={"Confirm Password"}/>
		</>
	)
}

export default AccountFormInputs