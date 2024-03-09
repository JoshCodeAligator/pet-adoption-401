"use client"

import AdminCreateAccountView from "@CreateAccount/admin/AdminCreateAccountView";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {createAdminAccount, getAllRescueCentres} from "@CreateAccount/CreateAccountAPI";
import RescueCentre from "@CreateAccount/RescueCentre";
import {address, confirm_password, name, email, password, phone} from "@/app/constants";

export const AdminCreateAccountController = () => {
	const [errorFlag, setErrorFlag] = useState(false)
	const [error, setError] = useState('')
	const [allRescueCentres, setAllRescueCentres] = useState([])
	const [selectedCentreIndex, setSelectedCentreIndex] = useState(-1)

	const router = useRouter()

	useEffect(() => {
		console.log("selected centre index: ", selectedCentreIndex)
		console.log("selected centre: ", allRescueCentres[selectedCentreIndex])

		// some odd reason once you select an index, then go back to blank, if statement still is ran, even though
		// selectedCentreIndex is -1

	}, [allRescueCentres, selectedCentreIndex]);

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

	const validateAdminForm = ({name, address, phone, email, password, confirm_password}) => {
		// may or may not be null, depending on index
		const rescue_centre = allRescueCentres[selectedCentreIndex]

		// first check all fields filled in

		if (!rescue_centre && (!name || !address || !phone || !email || !password)) {
			setErrorFlag(true)
			setError("Fill all fields")
			console.log("Did not select a rescue centre, and didn't fill in all fields.")
			return false
		}
		// below is case where select an existing rescue centre, then no need to fill out centre fields
		else if (rescue_centre && (!email || !password)) {
			setErrorFlag(true)
			setError("Fill email and password")
			console.log("Didn't fill out email or password, but selected a rescue centre")
			return false
		}

		// check if confirm password matches
		if (password !== confirm_password) {
			setErrorFlag(true)
			setError("Password and Confirm Password needs to be the same")
			console.log("Confirm password doesn't match")
			return false
		}

		console.log("Validation success")
		return true
	}

	const adminFormSubmit = async (formData) => {
		// clear error
		// setErrorFlag(false)
		// setError("")
		// might be optional to do as if just change page on success,
		// meaning multiple attempts are made while flag is true

		const formFields = {
			// centre_index: formData.get(dropDownMenuName),
			centre_id: -1,
			// needs to be set later, isn't actually a form field, but data derived from one
			// added to this object to make it easier to use later
			name: formData.get(name),
			address: formData.get(address),
			phone: formData.get(phone),
			email: formData.get(email),
			password: formData.get(password),
			confirm_password: formData.get(confirm_password)
		}

		// set centre_id if rescue centre isn't null
		const rescue_centre = allRescueCentres[selectedCentreIndex]
		if (rescue_centre) {
			formFields.centre_id = rescue_centre.id
		}

		console.log("Got following data from form:\n", formFields)

		// issue with if statement above, it seems to trigger even if it should have value -1?
		// might want to somehow be able to pass up the RescueCentre selected, not just the index

		// use a state passed all the way down from here

		// form seems to work however if actually select an existing centre

		// validate fields
		if (!validateAdminForm(formFields)) {
			// failed validation, don't continue
			return
		}

		const result = await createAdminAccount(formFields)
		console.log(result)

		if (result.success) {
			alert("Admin account created")
			router.push('/login')
			return
		}

		setErrorFlag(true)
		setError(result.error)
	}

	return (
		<>
			<AdminCreateAccountView onSubmit={adminFormSubmit}
									errorFlag={errorFlag} errorMessage={error}
									rescueCentres={allRescueCentres}
									setSelectedIndex={setSelectedCentreIndex}/>
		</>
	)
}