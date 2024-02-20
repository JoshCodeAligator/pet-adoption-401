"use client";

import {useEffect, useState} from "react";
import getAllPets from "@test/testAPI";
import {TestView} from "@test/TestView";
import {PetDisplay} from "@test/PetDisplay";

// where call to db is made via api file
// format data received from api call
// Send relevant data from db to View and render it

const TestController = () => {
	const [petData, setPetData] = useState([])

	useEffect( () => {
		// set petData from api call
		const fetchAllPets = async () => {
			const data = await getAllPets()

			const dataArray = []

			// format data into an object
			data.map((pet) => {
				dataArray.push(PetDisplay.objectFromDict(pet))
			})

			setPetData(dataArray)
		}

		fetchAllPets()
	}, []);

	// simply render the TestView passing needed props
	return (
		<>
			<TestView petData={petData} />
		</>
	)
}

export default TestController;