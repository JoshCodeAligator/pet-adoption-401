"use client"

import Navbar from "@components/Navbar";
import CategorySelectButton from "@components/CategorySelectButton";
import {animal, cat, category, dog, exotic, rabbit} from "@/app/constants";
import BrowseOrderButton from "@components/BrowseOrderButton";
import AnimalPreview from "@components/AnimalPreview";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useCallback, useEffect, useState, useMemo } from "react";
import { getAllAvailablePets, getAllAvailablePetsOfType } from "./BrowsePetsAPI";
import Animal from "./Animal";


const BrowsePetsView = ({animals}) => {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const [currentCategory, setCurrentCategory] = useState(searchParams.get(category));
	const [animalsToDisplay, setAnimalsToDisplay] = useState(animals);
	
	// below is a subset of animals that gets updated when any of the buttons on the page
	// are clicked
	
	// this is a potential variable as don't want to edit animals holding all of them
	// as it is possible to click on a category, then want to view all animals
	// or change category
	// in those cases need animals to not change but rather be accessed via this local copy
	
	// also can change order of local copy for things like ordering by age or name
	// without needing to do it on all animals if currently only viewing dogs only
	
	useEffect(() => {
		const fetchAnimalsByCategory = async () => {
			try {
				let animals;
				if (currentCategory === animal) {
					animals = await getAllAvailablePets();
				} else if (currentCategory) {
					animals = await getAllAvailablePetsOfType(currentCategory);
				}
				// create animal objects for each animal and store in state
				const animalObjects = animals.map((animal) => {
					return new Animal(animal.pet_id, animal.name, animal.age, animal.sex, animal.category, animal.breed, "");
				});
				setAnimalsToDisplay(animalObjects);
			} catch (error) {
				console.error("Error fetching animals by category:", error);
			}
		};
		fetchAnimalsByCategory();
	}, [currentCategory]);

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

	const handleCategoryClick = (clickedCategory) => {
		setCurrentCategory(clickedCategory);
		// change current URL params
		router.push(pathname + '?' + createQueryString(category, clickedCategory))
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
										  categoryState={currentCategory}
										  onClick={() => handleCategoryClick(animal)}/>
					<CategorySelectButton content={"View All Dogs"} newCategory={dog}
										  categoryState={currentCategory}
										  onClick={() => handleCategoryClick(dog)}/>
					<CategorySelectButton content={"View All Cats"} newCategory={cat}
										  categoryState={currentCategory}
										  onClick={() => handleCategoryClick(cat)}/>
					<CategorySelectButton content={"View All Rabbits"} newCategory={rabbit}
										  categoryState={currentCategory}
										  onClick={() => handleCategoryClick(rabbit)}/>
					<CategorySelectButton content={"View All Exotics"} newCategory={exotic}
										  categoryState={currentCategory}
										  onClick={() => handleCategoryClick(exotic)}/>
				</div>
				<div className="mb-10">
					<BrowseOrderButton content={"By Name"} onClick={() => {}}/>
					<BrowseOrderButton content={"By Age"} onClick={() => {}}/>
					<BrowseOrderButton content={"By Size"} onClick={() => {}}/>
				</div>
				<div className="grid grid-cols-4 gap-8">
					{animalsToDisplay.map((animal) => (
				<div key={animal.id} className="text-center">
				<AnimalPreview animal={animal} />
				</div>
			))}
				</div>
			</div>
		</main>
	);
}

export default BrowsePetsView;