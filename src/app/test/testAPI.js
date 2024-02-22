"use server"

import {getAllAvailablePets, getAllAvailablePetsOfType} from "@/app/BrowsePets/BrowsePetsAPI";


async function getAllPets() {

	// all queries work as intended

	// return getAllAvailablePets()
	return getAllAvailablePetsOfType("Dog")
}

export default getAllPets;