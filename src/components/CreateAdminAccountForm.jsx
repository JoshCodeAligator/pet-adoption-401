import AccountFormInputs from "@components/AccountFormInputs";
import DropDownMenu from "@components/DropDownMenu";
import FormInput from "@components/FormInput";
import {dropDownMenuName, phone, name, address} from "@/app/constants";

const CreateAdminAccountForm = ({onSubmit, createErrorFlag, createErrorMessage, rescueCentres, setIndex}) => {

	// field validation done outside this component

	// Need to be able to update form input fields with data from allRescueCentres when selecting an option

	return (
		<div>
			{/*	form to create client account */}
			<form action={onSubmit}>
				{/* Rescue centre information */}

				{/* Select an existing rescue centre*/}
				<DropDownMenu name={dropDownMenuName} label={"Select an existing Rescue Centre"}
							  menuDataList={rescueCentres} setIndex={setIndex}/>

				{/* or enter details for a new rescue centre */}
				<FormInput type={"text"} name={name} label={"Rescue Centre Name"} placeholder={""}/>
				<FormInput type={"text"} name={address} label={"Rescue Centre Address"} placeholder={""}/>
				<FormInput type={"text"} name={phone} label={"Rescue Centre phone number"} placeholder={"587-111-1111"}/>

				{/* Account information */}
				<AccountFormInputs/>

				{/*	submit button */}
				<button type={"submit"}>Create New Admin Account</button>
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

export default CreateAdminAccountForm