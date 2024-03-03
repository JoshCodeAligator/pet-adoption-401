import Navbar from "@components/Navbar";
import CreateClientAccountForm from "@components/CreateClientAccountForm";

const ClientCreateAccountView = ({onSubmit, errorFlag, errorMessage}) => {
	return (
		<>
			<Navbar/>
			<div className={"absolute top-20"}>
				<CreateClientAccountForm onSubmit={onSubmit}
										 createErrorFlag={errorFlag}
										 createErrorMessage={errorMessage}/>
			</div>
		</>

	)
}

export default ClientCreateAccountView