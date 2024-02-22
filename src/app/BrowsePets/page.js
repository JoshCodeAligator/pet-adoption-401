"use client"
import React, {useState, useEffect, useCallback} from "react";
import {usePathname, useRouter, useSearchParams} from 'next/navigation'
import Navbar from "../components/Navbar";
import BrowseOrderButton from "@components/BrowseOrderButton";
import CategorySelectButton from "@components/CategorySelectButton";
import {getAllAvailablePets} from "@/app/BrowsePets/BrowsePetsAPI";
import Animal from "@/app/BrowsePets/Animal";
import Image from "next/image";
import Link from "next/link";
import {AnimalPreview} from "@components/AnimalPreview";
import {category, animal, dog, cat, rabbit, exotic} from "@/app/gloabl/constants";


const BrowsePetsView = () => {

  // let animals = []
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [currentCategory, setCurrentCategory] = useState(searchParams.get(category));
  // function below is from nextjs docs

  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
      (name, value) => {
        const params = new URLSearchParams(searchParams)
        params.set(name, value)

        return params.toString()
      },
      [searchParams]
  )

  // useEffect(() => {
  //
  //   // fill animals with db data
  //   const queryAllPets = async () => {
  //     // const allPetsData = await getAllAvailablePets()
  //     // const animalArray = []
  //     //
  //     // allPetsData.map((petData) => {
  //     //   animalArray.push(Animal.objectFromJson(petData))
  //     // })
  //     //
  //     // console.log(animalArray)
  //     // console.log(animalArray.length)
  //     // // some reason this occurs twice when load page/every refresh?
  //     // // no clue why
  //     //
  //     // return animalArray
  //   }
  //
  //   const getQueryParam = (name) => {
  //     // const urlParams = new URLSearchParams(window.location.search);
  //     // return urlParams.get(name);
  //     return searchParams.get(name)
  //   };
  //
  //
  //   // const categoryParam = getQueryParam(category)
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   // animals = queryAllPets()
  //   // it is okay for animals data to be lost every render
  //   // setCategory(categoryParam);
  // }, []);

  const handleCategoryClick = (clickedCategory) => {
    let newCategory;
    let newUrl;

    if (clickedCategory === null) {
      newCategory = animal;
      newUrl = `${window.location.pathname}`;
    } else {
      newCategory = clickedCategory;
      // const urlParams = new URLSearchParams(window.location.search);
      // urlParams.set("category", clickedCategory);
      // newUrl = `${window.location.pathname}?${urlParams.toString()}`;
    }

    // window.history.pushState({ path: newUrl }, "", newUrl);
    setCurrentCategory(newCategory);
    router.push(pathname + '?' + createQueryString('category', newCategory))
  };


  const animals = [
    {
      id: "1234",
      name: "Fluffy",
      age: "2 years",
      sex: "Male",
      breed: "Persian",
      image: "/images/dog.jpg",
    },
    {
      id: "12341",
      name: "Fluffy",
      age: "2 years",
      sex: "Male",
      breed: "Persian",
      image: "/images/dog.jpg",
    },{
      id: "12342",
      name: "Fluffy",
      age: "2 years",
      sex: "Male",
      breed: "Persian",
      image: "/images/dog.jpg",
    },{
      id: "12344",
      name: "Fluffy",
      age: "2 years",
      sex: "Male",
      breed: "Persian",
      image: "/images/dog.jpg",
    },
  ];

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
            {/*<button*/}
            {/*    className={`font-bold border-4 border-white ${category === dog ? "bg-white" : "hover:bg-white"} text-black rounded-full px-6 py-3 mr-4`}*/}
            {/*    onClick={() => handleCategoryClick(dog)}*/}
            {/*    disabled={category === dog}*/}
            {/*>*/}
            {/*  Dogs*/}
            {/*</button>*/}
            {/*<button*/}
            {/*    className={`font-bold border-4 border-white ${category === cat ? "bg-white" : "hover:bg-white"} text-black rounded-full px-6 py-3 mr-4`}*/}
            {/*    onClick={() => handleCategoryClick(cat)}*/}
            {/*    disabled={category === cat}*/}
            {/*>*/}
            {/*  Cats*/}
            {/*</button>*/}
            {/*<button*/}
            {/*    className={`font-bold border-4 border-white ${category === rabbit ? "bg-white" : "hover:bg-white"} text-black rounded-full px-6 py-3 mr-4`}*/}
            {/*    onClick={() => handleCategoryClick(rabbit)}*/}
            {/*    disabled={category === rabbit}*/}
            {/*>*/}
            {/*  Rabbits*/}
            {/*</button>*/}
            {/*<button*/}
            {/*    className={`font-bold border-4 border-white ${category === exotic ? "bg-white" : "hover:bg-white"} text-black rounded-full px-6 py-3 mr-4`}*/}
            {/*    onClick={() => handleCategoryClick(exotic)}*/}
            {/*    disabled={category === exotic}*/}
            {/*>*/}
            {/*  Exotics*/}
            {/*</button>*/}
          </div>
          <div className="mb-10">
            <BrowseOrderButton content={"By Name"}/>
            <BrowseOrderButton content={"By Age"}/>
            <BrowseOrderButton content={"By Size"}/>
            {/*<button*/}
            {/*    className="font-bold bg-orange-500 hover:bg-emerald-500 text-white rounded-full px-8 py-4 mr-4 text-lg">*/}
            {/*  By Age*/}
            {/*</button>*/}
            {/*<button className="font-bold bg-orange-500 hover:bg-emerald-500 text-white rounded-full px-8 py-4 text-lg">*/}
            {/*  By Size*/}
            {/*</button>*/}
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
