import FormInput from "@components/FormInput";

const AccountFormInputs = () => {
	return (
		<>
			{/* email */}
			<FormInput type={"email"} name={"email"} label={"Email"}
					   placeholder={"PetPursuit@email.com"}/>
			<br/>
			{/* password */}
			<FormInput type={"password"} name={"password"} label={"Password"}/>
			<br/>
			{/* confirm password */}
			<FormInput type={"password"} name={"confirm_password"} label={"Confirm Password"}/>
		</>
	)
}

export default AccountFormInputs