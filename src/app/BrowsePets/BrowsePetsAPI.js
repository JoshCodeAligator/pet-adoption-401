"use server"

import query from "@/db/setup/db";

const available = "available"
const dog = "Dog"
const cat = "Cat"

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

async function getAllAvailableDogs() {
	try {
		const result = await query(
			'SELECT * FROM Pet natural join PetType WHERE status = ? AND category = ?',
			[available, dog])
		console.log(result)
		return result

	} catch (e) {
		console.log("Error with getAllAvailableDogs", e)
	}
}

async function getAllAvailableCat() {
	try {
		const result = await query(
			'SELECT * FROM Pet natural join PetType WHERE status = ? AND category = ?',
			[available, cat])
		console.log(result)
		return result

	} catch (e) {
		console.log("Error with getAllAvailableCat", e)
	}
}

export { getAllAvailablePets, getAllAvailableCat, getAllAvailableDogs }
