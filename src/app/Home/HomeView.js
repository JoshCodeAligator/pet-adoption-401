"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import {useRouter} from "next/navigation";
import {cat, dog, exotic, rabbit} from "@/app/constants";

const HomeView = () => {
  const [hovered, setHovered] = useState({
    dog: false,
    cat: false,
    rabbit: false,
    exotic: false,
  });

  const router = useRouter()

  const handleMouseEnter = (animal) => {
    setHovered((prevState) => ({ ...prevState, [animal]: true }));
  };

  const handleCategoryClick = (animal) => {
    // if (typeof window !== "undefined") {
    //   // window.location.href = `/BrowsePets?category=${animal}`;
    //
    // }
    router.push(`/BrowsePets?category=${animal}`)
  };

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24 bg-cover bg-center"
      style={{ backgroundImage: `url('/images/background.jpg')` }}
    >
      <Navbar />

      <div className="flex flex-wrap justify-center gap-8 mt-8">
        <div className="flex flex-col items-center">
          <div
            className={`rounded-full overflow-hidden border-4 border-gray-300 transition duration-300 ${
              hovered.dog ? "border-orange-500" : ""
            }`}
            onMouseEnter={() =>
              setHovered((prevState) => ({ ...prevState, dog: true }))
            }
            onMouseLeave={() =>
              setHovered((prevState) => ({ ...prevState, dog: false }))
            }
          >
            <Image
              src="/images/dog.jpg"
              width={200}
              height={200}
              alt="Picture of a Dog"
            />
          </div>
          <h2 className="mt-4 text-lg font-semibold">Dogs</h2>

          <button
            className="mt-2 px-4 py-2 bg-white text-black border border-black rounded-md transition duration-300 hover:text-white hover:bg-orange-500"
            onClick={() => handleCategoryClick(dog)}
          >
            View Dogs
          </button>
        </div>

        <div className="flex flex-col items-center">
          <div
            className={`rounded-full overflow-hidden border-4 border-gray-300 transition duration-300 ${
              hovered.cat ? "border-orange-500" : ""
            }`}
            onMouseEnter={() =>
              setHovered((prevState) => ({ ...prevState, cat: true }))
            }
            onMouseLeave={() =>
              setHovered((prevState) => ({ ...prevState, cat: false }))
            }
          >
            <Image
              src="/images/cat.jpg"
              width={200}
              height={200}
              alt="Picture of a Cat"
            />
          </div>
          <h2 className="mt-4 text-lg font-semibold">Cats</h2>

          <button
            className="mt-2 px-4 py-2 bg-white text-black border border-black rounded-md transition duration-300 hover:text-white hover:bg-orange-500"
            onClick={() => handleCategoryClick(cat)}
          >
            View Cats
          </button>
        </div>

        <div className="flex flex-col items-center">
          <div
            className={`rounded-full overflow-hidden border-4 border-gray-300 transition duration-300 ${
              hovered.rabbit ? "border-orange-500" : ""
            }`}
            onMouseEnter={() =>
              setHovered((prevState) => ({ ...prevState, rabbit: true }))
            }
            onMouseLeave={() =>
              setHovered((prevState) => ({ ...prevState, rabbit: false }))
            }
          >
            <Image
              src="/images/rabbit.jpg"
              width={200}
              height={200}
              alt="Picture of a Rabbit"
            />
          </div>
          <h2 className="mt-4 text-lg font-semibold">Rabbits</h2>

          <button
            className="mt-2 px-4 py-2 bg-white text-black border border-black rounded-md transition duration-300 hover:text-white hover:bg-orange-500"
            onClick={() => handleCategoryClick(rabbit)}
          >
            View Rabbits
          </button>
        </div>

        <div className="flex flex-col items-center">
          <div
            className={`rounded-full overflow-hidden border-4 border-gray-300 transition duration-300 ${
              hovered.exotic ? "border-orange-500" : ""
            }`}
            onMouseEnter={() =>
              setHovered((prevState) => ({ ...prevState, exotic: true }))
            }
            onMouseLeave={() =>
              setHovered((prevState) => ({ ...prevState, exotic: false }))
            }
          >
            <Image
              src="/images/exotic.jpg"
              width={200}
              height={200}
              alt="Picture of an Exotic"
            />
          </div>
          <h2 className="mt-4 text-lg font-semibold">Exotics</h2>

          <button
            className="mt-2 px-4 py-2 bg-white text-black border border-black rounded-md transition duration-300 hover:text-white hover:bg-orange-500"
            onClick={() => handleCategoryClick(exotic)}
          >
            View Exotics
          </button>
        </div>
      </div>
    </main>
  );
};

export default HomeView;
