import FormInput from "@components/FormInput";
import {confirm_***REMOVED***, email, ***REMOVED***} from "@/app/constants";

const AccountFormInputs = () => {
	return (
		<div>
			{/* email */}
			<FormInput type={"email"} name={email} label={"Email"}
					   placeholder={"PetPursuit@email.com"}/>
			{/* ***REMOVED*** */}
			<FormInput type={"***REMOVED***"} name={***REMOVED***} label={"Password"}/>
			{/* confirm ***REMOVED*** */}
			<FormInput type={"***REMOVED***"} name={confirm_***REMOVED***} label={"Confirm Password"}/>
		</div>
	)
}

export default AccountFormInputs