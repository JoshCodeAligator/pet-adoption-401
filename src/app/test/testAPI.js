"use server"

import {getAllAvailableCat, getAllAvailablePets, getAllAvailableDogs} from "@/app/BrowsePets/BrowsePetsAPI";


async function getAllPets() {

	// all queries work as intended

	return getAllAvailablePets()
	// return getAllAvailableCat()
	// return getAllAvailableDogs()
}

export default getAllPets;