"use client"

import Navbar from "@components/Navbar";
import CreateAdminAccountForm from "@components/CreateAdminAccountForm";
import {useEffect, useState} from "react";


const AdminCreateAccountView = ({onSubmit, errorFlag, errorMessage, rescueCentres}) => {
	const [selectedIndex, setSelectedIndex] = useState(-1)

	// update rescue centre form fields upon selection
	useEffect(() => {
		if (selectedIndex !== -1) {
			console.log("Selected following from rescue centre dropdown: ", rescueCentres[selectedIndex])
			// for some reason, never goes into else (other than first loading of page)
			// however, does correctly log
		}
		else {
			console.log("Selected nothing from rescue centre dropdown")
		}

	}, [selectedIndex]);

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