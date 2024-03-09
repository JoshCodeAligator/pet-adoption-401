import Navbar from "@components/Navbar";
import CreateAdminAccountForm from "@components/CreateAdminAccountForm";


const AdminCreateAccountView = ({onSubmit, errorFlag, errorMessage, rescueCentres}) => {
	return (
		<>
			<Navbar/>
			<div className={"absolute top-20"}>
				<CreateAdminAccountForm onSubmit={onSubmit}
										createErrorFlag={errorFlag}
										createErrorMessage={errorMessage}
										rescueCentres={rescueCentres}/>
			</div>
		</>
	)
}
export default AdminCreateAccountView