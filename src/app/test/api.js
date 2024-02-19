"use server"

import query from "@/db/setup/db";

async function getAllPets() {
	try {
		const data = await query('SELECT * FROM Pet', [])
		console.log(data)
		return data
	} catch (e) {
		console.log("Error with getAllPets", e)
	}
}

export default getAllPets;