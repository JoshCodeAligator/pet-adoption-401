"use client"

import Navbar from "@components/Navbar";
import CreateAdminAccountForm from "@components/CreateAdminAccountForm";
import {useEffect, useState} from "react";


const AdminCreateAccountView = ({onSubmit, errorFlag, errorMessage, rescueCentres, setSelectedIndex}) => {

	return (
		<>
			<Navbar/>
			<div className={"absolute top-20"}>
				<CreateAdminAccountForm onSubmit={onSubmit}
										createErrorFlag={errorFlag}
										createErrorMessage={errorMessage}
										rescueCentres={rescueCentres}
										setIndex={setSelectedIndex}/>
			</div>
		</>
	)
}
export default AdminCreateAccountView