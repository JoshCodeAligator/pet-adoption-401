"use server"

import query from "@/db/setup/db";

async function getAllAvailablePets() {
  try {
    const result = await query(
      "SELECT * FROM Pet natural join PetType WHERE status != ?",
      ["adopted"]
    );
    // console.log(result)

    return result;
  } catch (e) {
    console.log("Error with getAllAvailablePets", e);
  }
}

async function getAllAvailablePetsOfType(category) {
  try {
    const result = await query(
      "SELECT * FROM Pet natural join PetType WHERE status != ? AND category = ?",
      ["adopted", category]
    );
    console.log("category ", category);
    console.log("type of category ", typeof category);
    console.log("results from selective search ", result);
    return result;
  } catch (e) {
    console.log("Error with getAllAvailablePetsOfType", e);
  }
}

export { getAllAvailablePets, getAllAvailablePetsOfType }
