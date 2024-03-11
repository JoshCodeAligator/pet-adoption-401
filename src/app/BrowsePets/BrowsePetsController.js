"use client"

import React, {useState, useEffect} from "react";
import {getAllAvailablePets} from "@/app/BrowsePets/BrowsePetsAPI";
import Animal from "@/app/BrowsePets/Animal";
import BrowsePetsView from "@/app/BrowsePets/BrowsePetsView";


const BrowsePetsController = () => {
  const [animals, SetAnimals] = useState([]);

  useEffect(() => {
    const queryAllPets = async () => {
      const allPetData = await getAllAvailablePets();

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

export default BrowsePetsController;