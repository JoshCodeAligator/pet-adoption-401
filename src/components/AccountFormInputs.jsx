import FormInput from "@components/FormInput";
import {confirm_password, email, password} from "@/app/constants";

const AccountFormInputs = () => {
	return (
		<div>
			{/* email */}
			<div style={{color: 'black', paddingTop: '15px'}} className="flex justify-center">
				<FormInput type={"email"} name={email} label={"Email"} placeholder={"petpursuit@email.com"}/>
			</div>
			{/* password */}
			<div style={{color: 'black', paddingTop: '15px'}} className="flex justify-center">
				<FormInput type={"password"} name={password} label={"Password"} placeholder={"Password"}/>
			</div>
			{/* confirm password */}
			<div style={{color: 'black', paddingTop: '15px'}} className="flex justify-center">
				<FormInput type={"password"} name={confirm_password} label={"Confirm Password"} placeholder={"Password"}/>
			</div>
		</div>
	)
}

export default AccountFormInputs