import Navbar from "@components/Navbar";
import CreateClientAccountForm from "@components/CreateClientAccountForm";

const ClientCreateAccountView = () => {
	return (
		<>
			<Navbar/>
			<div className={"absolute top-20"}>
				<CreateClientAccountForm/>
			</div>
		</>

	)
}

export default ClientCreateAccountView