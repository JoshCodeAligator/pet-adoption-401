"use client"
import React, {useState, useEffect, useCallback} from "react";
import {usePathname, useRouter, useSearchParams} from 'next/navigation'
import Navbar from "../components/Navbar";
import BrowseOrderButton from "@components/BrowseOrderButton";
import CategorySelectButton from "@components/CategorySelectButton";
import {getAllAvailablePets} from "@/app/BrowsePets/BrowsePetsAPI";
import Animal from "@/app/BrowsePets/Animal";
import {AnimalPreview} from "@components/AnimalPreview";
import {category, animal, dog, cat, rabbit, exotic} from "@/app/gloabl/constants";


const BrowsePetsView = () => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [currentCategory, setCurrentCategory] = useState(searchParams.get(category));
    const [animals, SetAnimals] = useState([])

  // function below is from Next.js docs
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
      (name, value) => {
        const params = new URLSearchParams(searchParams)
        params.set(name, value)

        return params.toString()
      },
      [searchParams]
  )

  useEffect(() => {
	  const queryAllPets = async () => {
		  const allPetData = await getAllAvailablePets()

		  const animalArray = []

		  allPetData.map((petData) => {
			  animalArray.push(Animal.objectFromJson(petData))
		  })

		  return animalArray
	  }
	  queryAllPets().then( result => SetAnimals(result))
  }, []);

  const handleCategoryClick = (clickedCategory) => {
      const newCategory = clickedCategory
      setCurrentCategory(newCategory);
      router.push(pathname + '?' + createQueryString(category, newCategory))
  };


  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-cover bg-center">
        <Navbar/>

        <div className="text-center mb-16 ">
          <h1 className="text-6xl font-extrabold mb-12 text-orange-500">
            <span className="text-white">{currentCategory}</span> Listings
          </h1>
          <div className="mb-10">
            <CategorySelectButton content={"View All Animals"} newCategory={animal}
                                  categoryState={currentCategory} onClick={() => handleCategoryClick(animal)}/>
            <CategorySelectButton content={"View All Dogs"} newCategory={dog}
                                  categoryState={currentCategory} onClick={() => handleCategoryClick(dog)}/>
            <CategorySelectButton content={"View All Cats"} newCategory={cat}
                                  categoryState={currentCategory} onClick={() => handleCategoryClick(cat)}/>
            <CategorySelectButton content={"View All Rabbits"} newCategory={rabbit}
                                  categoryState={currentCategory} onClick={() => handleCategoryClick(rabbit)}/>
            <CategorySelectButton content={"View All Exotics"} newCategory={exotic}
                                  categoryState={currentCategory} onClick={() => handleCategoryClick(exotic)}/>
          </div>
          <div className="mb-10">
            <BrowseOrderButton content={"By Name"}/>
            <BrowseOrderButton content={"By Age"}/>
            <BrowseOrderButton content={"By Size"}/>
          </div>
          <div className="grid grid-cols-4 gap-8">
            {animals.map((animal) => (
                <div key={animal.id} className="text-center">
                  <AnimalPreview animal={animal}/>
                </div>
            ))}
          </div>
        </div>
      </main>
  );
};

export default BrowsePetsView;
