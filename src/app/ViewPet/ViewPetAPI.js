"use server"

import query from "@/db/setup/db";

async function getPetDetails(pet_id) {
	try {
		const result = await query(
			'SELECT pet_id, Pet.name, sex, age, img, description, status, category, breed, ' +
			'RC.name as centreName, address as centreLocation, phone as centrePhone ' +
			'FROM Pet NATURAL JOIN PetType LEFT JOIN RescueCentre RC on Pet.centre_id = RC.centre_id ' +
			'WHERE pet_id = ?',
			[pet_id])
		console.log(result)

		return result
	} catch (e) {
		console.log("Error with getPetDetails", e)
	}
}

export default getPetDetails;
