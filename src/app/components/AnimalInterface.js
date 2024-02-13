"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const AnimalInterface = () => {
  const [hovered, setHovered] = useState({
    dog: false,
    cat: false,
    rabbit: false,
    exotic: false,
  });

  const handleMouseEnter = (animal) => {
    setHovered((prevState) => ({ ...prevState, [animal]: true }));
  };

  return (
    <div className="flex flex-wrap justify-center gap-8">
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
        <Link href="/dogs">
          <button className="mt-2 px-4 py-2 bg-white text-black border border-black rounded-md transition duration-300 hover:text-white hover:bg-orange-500">
            View Dogs
          </button>
        </Link>
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
        <Link href="/cats">
          <button className="mt-2 px-4 py-2 bg-white text-black border border-black rounded-md transition duration-300 hover:text-white hover:bg-orange-500">
            View Cats
          </button>
        </Link>
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
        <Link href="/rabbits">
          <button className="mt-2 px-4 py-2 bg-white text-black border border-black rounded-md transition duration-300 hover:text-white hover:bg-orange-500">
            View Rabbits
          </button>
        </Link>
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
        <Link href="/exotics">
          <button className="mt-2 px-4 py-2 bg-white text-black border border-black rounded-md transition duration-300 hover:text-white hover:bg-orange-500">
            View Exotics
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AnimalInterface;
