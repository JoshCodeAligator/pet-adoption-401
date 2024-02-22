"use server"

import query from "@/db/setup/db";

const available = "available"

async function getAllAvailablePets() {
	try {
		const result = await query(
			'SELECT * FROM Pet natural join PetType WHERE status = ?',
			[available])
		console.log(result)
		return result

	} catch (e) {
		console.log("Error with getAllAvailablePets", e)
	}
}

async function getAllAvailablePetsOfType(category) {
	try {
		const result = await query(
			'SELECT * FROM Pet natural join PetType WHERE status = ? AND category = ?',
			[available, category])
		console.log(result)
		return result

	} catch (e) {
		console.log("Error with getAllAvailablePetsOfType", e)
	}
}

export { getAllAvailablePets, getAllAvailablePetsOfType }
