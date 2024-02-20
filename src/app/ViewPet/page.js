import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <Navbar />
      <div className="absolute top-10 left-10 right-0 bottom-0">
        <div className="flex flex-grow">
          {/* Left Side */}
          <div className="flex flex-col items-center justify-center w-1/2 p-8 mt-10">
            {/* Moves the image inside the left side div */}
            <div className="w-80 h-80 relative">
              <Link href="/BrowsePets?category=Dogs">
                <button className="text-sm rounded p-2 bg-white text-black mb-4 hover:bg-orange-500">
                  &lt; Back to Listings
                </button>
              </Link>
              <Image
                src="/images/cat.jpg"
                alt="Animal Image"
                width={500}
                height={500}
              />
              <Link href="/BookAppointment">
                <button className="text-lg font-bold rounded-full p-4 bg-white text-black mb-4 mt-10 hover:bg-orange-500 hover:text-white">
                  Book An Appointment
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-1/2 p-8 mt-20">
            <h1 className="text-4xl font-bold mb-8">Animal Name</h1>
            <h2 className="text-2xl font-bold mb-4">
              Animal ID:{" "}
              <span className="text-orange-500 font-bold">XXXXXXXXXXX</span>
            </h2>
            <p className="text-lg">Age: XXX</p>
            <p className="text-lg mb-2">Category: XXX</p>
            <p className="text-lg mb-8">Some description about the animal.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
