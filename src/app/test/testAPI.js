"use server"

import query from "@/db/setup/db";

async function getAllPets() {
	try {
		const res = await query('SELECT * FROM Pet', [])
		console.log(res)
		return res

	} catch (e) {
		console.log("Error with getAllPets", e)
	}
}

export default getAllPets;