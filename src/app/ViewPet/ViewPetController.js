"use client"

import getPetDetails from "@/app/ViewPet/ViewPetAPI";
import ViewPetView from "@/app/ViewPet/ViewPetView";
import {useEffect, useState} from "react";
import AnimalDetail from "@/app/ViewPet/AnimalDetail";
import Error from "next/error";

const ViewPetController = ({pet_id}) => {
	const [pet, setPet] = useState({})

	useEffect(() => {
		const fetchPet = async (petID) => {
			const response = await getPetDetails(petID)

			if (response.length === 1)
				return AnimalDetail.objectFromAPIReturn(response[0])

			const unknown = "Unknown"
			return new AnimalDetail(-1, unknown, -1, unknown, unknown, unknown, null,
				unknown, unknown, unknown)
		}

		fetchPet(pet_id).then(res => {
			setPet(res)

			console.log(res)
		})
	}, [pet_id]);

	// if pet.id is -1 (meaning pet not found, return a 404 instead)
	if (pet.id === -1) {
		return (
			<Error statusCode={404}/>
		)
	}
	// this attempt does have some lag to it.
	// What happens it first renders the View
	// then a second later once the pet gets set (fetchPet at that point is done),
	// it changes to the 404

	return (
		<ViewPetView pet={pet}/>
	);
};

export default ViewPetController