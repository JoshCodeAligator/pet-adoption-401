"use client"
import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Image from "next/image";
import Link from "next/link";

const BrowsePetsView = () => {
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const getQueryParam = (name) => {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(name);
    };

    const categoryParam = getQueryParam("category");
    setCategory(categoryParam);
  }, []);

  const handleCategoryClick = (clickedCategory) => {
    let newCategory;
    let newUrl;

    if (clickedCategory === null) {
      newCategory = "Animals";
      newUrl = `${window.location.pathname}`;
    } else {
      newCategory = clickedCategory;
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.set("category", clickedCategory);
      newUrl = `${window.location.pathname}?${urlParams.toString()}`;
    }

    window.history.pushState({ path: newUrl }, "", newUrl);
    setCategory(newCategory); 
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
      id: "1234",
      name: "Fluffy",
      age: "2 years",
      sex: "Male",
      breed: "Persian",
      image: "/images/dog.jpg",
    },{
      id: "1234",
      name: "Fluffy",
      age: "2 years",
      sex: "Male",
      breed: "Persian",
      image: "/images/dog.jpg",
    },{
      id: "1234",
      name: "Fluffy",
      age: "2 years",
      sex: "Male",
      breed: "Persian",
      image: "/images/dog.jpg",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-cover bg-center">
      <Navbar />

      <div className="text-center mb-16 ">
        <h1 className="text-6xl font-extrabold mb-12 text-orange-500">
          <span className="text-white">{category}</span> Listings
        </h1>
        <div className="mb-10">
          <button 
            className={`font-bold border-4 border-white ${category === "Animals" ? "bg-white" : "hover:bg-white"} text-black rounded-full px-6 py-3 mr-4`}
            onClick={() => handleCategoryClick(null)}
            disabled={category === null}
            style={{ backgroundColor: category === null ? "white" : "" }}
          >
            View All Animals
          </button>
          <button 
            className={`font-bold border-4 border-white ${category === "Dogs" ? "bg-white" : "hover:bg-white"} text-black rounded-full px-6 py-3 mr-4`}
            onClick={() => handleCategoryClick("Dogs")}
            disabled={category === "Dogs"}
          >
            Dogs
          </button>
          <button 
            className={`font-bold border-4 border-white ${category === "Cats" ? "bg-white" : "hover:bg-white"} text-black rounded-full px-6 py-3 mr-4`}
            onClick={() => handleCategoryClick("Cats")}
            disabled={category === "Cats"}
          >
            Cats
          </button>
          <button 
            className={`font-bold border-4 border-white ${category === "Rabbits" ? "bg-white" : "hover:bg-white"} text-black rounded-full px-6 py-3 mr-4`}
            onClick={() => handleCategoryClick("Rabbits")}
            disabled={category === "Rabbits"}
          >
            Rabbits
          </button>
          <button 
            className={`font-bold border-4 border-white ${category === "Exotics" ? "bg-white" : "hover:bg-white"} text-black rounded-full px-6 py-3 mr-4`}
            onClick={() => handleCategoryClick("Exotics")}
            disabled={category === "Exotics"}
          >
            Exotics
          </button>
        </div>
        <div className="mb-10">
        <button className="font-bold bg-orange-500 hover:bg-emerald-500 text-white rounded-full px-8 py-4 mr-4 text-lg">
            By Name
          </button>
          <button className="font-bold bg-orange-500 hover:bg-emerald-500 text-white rounded-full px-8 py-4 mr-4 text-lg">
            By Age
          </button>
          <button className="font-bold bg-orange-500 hover:bg-emerald-500 text-white rounded-full px-8 py-4 text-lg">
            By Size
          </button>
        </div>
        <div className="grid grid-cols-4 gap-8">
        {animals.map((animal) => (
            <div key={animal.id} className="text-center">
              <Link href="/components/ViewPet">
                <Image
                  src={animal.image}
                  alt={animal.name}
                  className="hover:border-4 border-orange-500 rounded-full w-40 h-40 mx-auto mb-4"
                  width={500}
                  height={500}
                />
              </Link>
              <h2 className="text-xl font-bold mb-2">{animal.name}</h2>
              <p>
                <span className="font-bold">AnimalID:</span> {animal.id}
              </p>
              <p>
                <span className="font-bold">Age:</span> {animal.age}
              </p>
              <p>
                <span className="font-bold">Sex:</span> {animal.sex}
              </p>
              <p>
                <span className="font-bold">Breed:</span> {animal.breed}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BrowsePetsView;
