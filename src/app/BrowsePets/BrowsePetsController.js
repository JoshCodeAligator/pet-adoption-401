"use client"

import React, {useState, useEffect} from "react";
import {
  getAllAvailablePets,
  getAllAvailablePetsOfType,
} from "@/app/BrowsePets/BrowsePetsAPI";
import Animal from "@/app/BrowsePets/Animal";
import BrowsePetsView from "@/app/BrowsePets/BrowsePetsView";

const BrowsePetsController = () => {
  const [animals, SetAnimals] = useState([]);

  useEffect(() => {
    const queryAllPets = async () => {
      const allPetData = await getAllAvailablePets();
      // console.log("allPetData ", allPetData);

      const animalArray = [];

      allPetData.map((petData) => {
        animalArray.push(Animal.objectFromJson(petData));
      });

      return animalArray;
    };
    queryAllPets().then((result) => SetAnimals(result));
  }, []);

  return <BrowsePetsView animals={animals} />;
};

export const fetchAnimalsByCategory = async (currentCategory, animal) => {
  try {
    let animals;
    if (currentCategory === animal) {
      animals = await getAllAvailablePets();
    } else if (currentCategory) {
      animals = await getAllAvailablePetsOfType(currentCategory);
    }
    // create animal objects for each animal and store in state
    const animalObjects = animals.map((animal) => {
      return new Animal(
        animal.pet_id,
        animal.name,
        animal.age,
        animal.sex,
        animal.category,
        animal.breed,
        animal.img
      );
    });
    return animalObjects;
  } catch (error) {
    console.error("Error fetching animals by category:", error);
  }
};

export default BrowsePetsController;