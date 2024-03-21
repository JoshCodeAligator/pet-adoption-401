import FormInput from "@components/FormInput";
import {confirm_***REMOVED***, email, ***REMOVED***} from "@/app/constants";

const AccountFormInputs = () => {
	return (
		<div>
			{/* email */}
			<div style={{color: 'black', paddingTop: '15px'}} className="flex justify-center">
				<FormInput type={"email"} name={email} label={"Email"} placeholder={"petpursuit@email.com"}/>
			</div>
			{/* ***REMOVED*** */}
			<div style={{color: 'black', paddingTop: '15px'}} className="flex justify-center">
				<FormInput type={"***REMOVED***"} name={***REMOVED***} label={"Password"} placeholder={"Password"}/>
			</div>
			{/* confirm ***REMOVED*** */}
			<div style={{color: 'black', paddingTop: '15px'}} className="flex justify-center">
				<FormInput type={"***REMOVED***"} name={confirm_***REMOVED***} label={"Confirm Password"} placeholder={"Password"}/>
			</div>
		</div>
	)
}

export default AccountFormInputs