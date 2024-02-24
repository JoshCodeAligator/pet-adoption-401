"use client"

import getPetDetails from "@/app/ViewPet/ViewPetAPI";
import ViewPetView from "@/app/ViewPet/ViewPetView";
import {useEffect, useState} from "react";
import AnimalDetail from "@/app/ViewPet/AnimalDetail";

const ViewPetController = ({pet_id}) => {
	const [pet, setPet] = useState({})

	useEffect(() => {
		const fetchPet = async (petID) => {
			const response = await getPetDetails(petID)

			if (response.length === 1)
				return response[0]
			const unknown = "Unknown"
			return new AnimalDetail(-1, unknown, -1, unknown, unknown, unknown, null,
				unknown, unknown, unknown)
		}

		fetchPet(pet_id).then(res => setPet(res))
	}, [pet_id]);

	return (
		<ViewPetView pet={pet}/>
	);
};

export default ViewPetController