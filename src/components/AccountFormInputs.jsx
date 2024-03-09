import FormInput from "@components/FormInput";
import {confirm_password, email, password} from "@/app/constants";

const AccountFormInputs = () => {
	return (
		<div>
			{/* email */}
			<FormInput type={"email"} name={email} label={"Email"}
					   placeholder={"PetPursuit@email.com"}/>
			{/* password */}
			<FormInput type={"password"} name={password} label={"Password"}/>
			{/* confirm password */}
			<FormInput type={"password"} name={confirm_password} label={"Confirm Password"}/>
		</div>
	)
}

export default AccountFormInputs