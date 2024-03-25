"use client"

import Navbar from "@components/Navbar";
import CategorySelectButton from "@BrowsePets/CategorySelectButton";
import {animal, cat, category, dog, exotic, rabbit} from "@/app/constants";
import BrowseOrderButton from "@components/BrowseOrderButton";
import AnimalPreview from "@BrowsePets/AnimalPreview";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useCallback, useEffect, useState } from "react";
import {fetchAnimalsByCategory} from "./BrowsePetsController.js";


const BrowsePetsView = ({animals}) => {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const [currentCategory, setCurrentCategory] = useState(searchParams.get(category));
	const [animalsToDisplay, setAnimalsToDisplay] = useState(animals);
	
	useEffect(() => {
		// fetch animals by category
		const fetchedAnimals = async () => {
			const animals = await fetchAnimalsByCategory(currentCategory, animal);
			setAnimalsToDisplay(animals);
		};
		fetchedAnimals();
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

	// function to sort animalsToDisplay by name or age given a key, updates the animalsToDisplay state
	const sortAnimals = (key) => {
		const sortedAnimals = [...animalsToDisplay].sort((a, b) => {
			if (key === 'age') {
				// have to split the string to get the number
				const aAge = Number(a[key].split(' ')[0]);
				const bAge = Number(b[key].split(' ')[0]);
				if (aAge < bAge) return -1;
				if (aAge > bAge) return 1;
				return 0;
			}
			if ((a[key.length]) < (b[key].length)) {
				return -1;
			}
			if (a[key] < b[key]) {
				return -1;
			}
			if (a[key] > b[key]) {
				return 1;
			}
			return 0;
		});
		setAnimalsToDisplay(sortedAnimals);
	};

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
					<BrowseOrderButton content={"By Name"} onClick={() => {sortAnimals('name')}}/>
					<BrowseOrderButton content={"By Age"} onClick={() => {sortAnimals('age')}}/>
					{/* <BrowseOrderButton content={"By Size"} onClick={() => {}}/> */}
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