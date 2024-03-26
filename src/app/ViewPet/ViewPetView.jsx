"use client";

import Navbar from "@components/Navbar";
import Link from "next/link";
import Image from "next/image";

const ViewPetView = ({ pet }) => {
  const bookAppointmentLink = `/BookAppointment/${pet.id}`;

  return (
    <div>
      <Navbar />
      <div className="background">
          {/* spans for the animated background */}
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {/*  end of animated background */}
			</div>
      <div className="absolute top-10 left-10 right-10 bottom-0">
        <div className="flex flex-grow">
          <div className="flex flex-col items-center justify-between mt-10">
            
            {/* Top */}
            <div className="flex justify-between items-center w-full ">
              <Link href="/BrowsePets?category=Animals">
                <button className="text-lg font-bold rounded-full p-4 bg-white text-black mt-4 hover:bg-orange-500 hover:text-white">
                  &lt; Back to Listings
                </button>
              </Link>
              <h1 className="text-7xl font-bold w-1/2 pl-8">{pet.name}</h1>
            </div>

            {/* Middle */}
            <div className="flex justify-between items-center w-full">
              <Image
                src={pet._image}
                alt="Animal Image"
                width={500}
                height={500}
              />
              <div className="w-1/2 p-8 mt-20">
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
                <p className="text-lg mb-8 mt-4">{pet.description}</p>
              </div>
            </div>

            {/* Bottom */}
            <div className="flex justify-between items-center w-full">
              <Link href={bookAppointmentLink}>
                <button className="text-lg font-bold rounded-full p-4 bg-white text-black mb-4 mt-10 hover:bg-orange-500 hover:text-white">
                  Book An Appointment
                </button>
              </Link>
              {/*	Rescue centre information */}
              <div className="w-1/2 pl-8">
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
      </div>
    </div>
  );
};

export default ViewPetView;
