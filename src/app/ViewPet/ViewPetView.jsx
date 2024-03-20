"use client";

import Navbar from "@components/Navbar";
import Link from "next/link";
import Image from "next/image";

const ViewPetView = ({ pet }) => {
  const bookAppointmentLink = `/BookAppointment/${pet.id}`;

  return (
    <div>
      <Navbar />
      <div className="absolute top-10 left-10 right-0 bottom-0">
        <div className="flex flex-grow">
          {/* Left Side */}
          <div className="flex flex-col items-center justify-center w-1/2 p-8 mt-10">
            {/* Moves the image inside the left side div */}
            <div className="w-80 h-80 relative">
              <Link href="/BrowsePets?category=Animals">
                <button className="text-sm rounded p-2 bg-white text-black mb-4 hover:bg-orange-500">
                  &lt; Back to Listings
                </button>
              </Link>
              <Image
                src={pet._image}
                alt="Animal Image"
                width={500}
                height={500}
              />
              <Link href={bookAppointmentLink}>
                <button className="text-lg font-bold rounded-full p-4 bg-white text-black mb-4 mt-10 hover:bg-orange-500 hover:text-white">
                  Book An Appointment
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-1/2 p-8 mt-20">
            <h1 className="text-4xl font-bold mb-8">{pet.name}</h1>
            <h2 className="text-2xl font-bold mb-4">
              Animal ID:
              <span className="text-orange-500 font-bold">{pet.id}</span>
              {/*  Not sure why we need the <span> above */}
            </h2>
            <p className="text-lg">Age: {pet.age}</p>
            <p className="text-lg">Sex: {pet.sex}</p>
            <p className="text-lg">Category: {pet.category}</p>
            <p className="text-lg mb-2">Breed: {pet.breed}</p>
            <p className="text-lg">Status: {pet.status}</p>
            <p className="text-lg mb-8">{pet.description}</p>

            {/* Maybe a divider here? */}

            {/*	Rescue centre information */}
            <p className="text-lg">Rescue Centre Name: {pet.centre_name}</p>
            <p className="text-lg">
              Rescue Centre Address: {pet.centre_address}
            </p>
            <p className="text-lg">
              Rescue Centre Phone Number: {pet.centre_phone}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPetView;
