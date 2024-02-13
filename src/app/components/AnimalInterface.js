"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const AnimalInterface = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex flex-wrap justify-center gap-8">
      <div className="flex flex-col items-center">
        <div
          className={`rounded-full overflow-hidden border-4 border-gray-300 transition duration-300 ${
            hovered ? "border-orange-500" : ""
          }`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Image
            src="/dog.jpg"
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
            hovered ? "border-orange-500" : ""
          }`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Image
            src="/cat.jpg"
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
            hovered ? "border-orange-500" : ""
          }`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Image
            src="/rabbit.jpg"
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
            hovered ? "border-orange-500" : ""
          }`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Image
            src="/exotic.jpg"
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
