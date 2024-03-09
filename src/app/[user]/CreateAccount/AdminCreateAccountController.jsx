"use client"

import AdminCreateAccountView from "@CreateAccount/AdminCreateAccountView";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {getAllRescueCentres} from "@CreateAccount/CreateAccountAPI";
import RescueCentre from "@CreateAccount/RescueCentre";

export const AdminCreateAccountController = () => {
	const [errorFlag, setErrorFlag] = useState(false)
	const [error, setError] = useState('')
	const [allRescueCentres, setAllRescueCentres] = useState([])

	const router = useRouter()

	useEffect(() => {
		// fetch all rescue centres from db
		getAllRescueCentres().then((rescueCentreList) => {
			// make a list of RescueCentre objects which gets set to allRescueCentres
			const centres = []
			rescueCentreList.map((centre) => {
				centres.push(RescueCentre.objectFromJson(centre))
			})

			setAllRescueCentres(centres)
		})
	}, []);

	const validateAdminForm = () => {

	}

	const adminFormSubmit = async (formData) => {

	}


	return (
		<>
			<AdminCreateAccountView onSubmit={adminFormSubmit}
									errorFlag={errorFlag} errorMessage={error}
									rescueCentres={allRescueCentres}/>
		</>
	)
}