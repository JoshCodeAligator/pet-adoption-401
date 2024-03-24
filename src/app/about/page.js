import Navbar from "@/components/Navbar";
import React from "react";
import AboutContent from "@about/AboutContent";


// NO MVC here as this is a static page, thus only has a view

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-pawprint-pattern flex flex-col justify-center items-center py-12 relative">
      {/* Navigation */}
      <Navbar />
      {/* Main content */}
      <AboutContent />
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
    </div>
  );
};

export default AboutPage;
import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-pawprint-pattern flex flex-col justify-center items-center py-12">
      {/* Navigation */}
      <nav className="bg-black py-4 fixed top-0 left-0 w-full z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex-shrink-0">
            <a className="flex items-center text-white text-xl font-bold" href="/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-8 w-8 mr-2">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              <span>Home</span>
            </a>
          </div>
          <div className="text-white text-lg lg:flex hidden">
            <a className="ml-6" href="/about"><span>About</span></a>
            <a className="ml-6" href="/client/CreateAccount"><span>Create Account</span></a>
            <a className="ml-6" href="/login"><span>Log In</span></a>
          </div>
          <div className="lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-9 w-9 text-white mr-4 cursor-pointer">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
            </svg>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <section className="p-6 bg-white shadow-md rounded-lg mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to <span className="text-green-600">PetPursuit</span></h2>
          <p className="text-gray-700 leading-relaxed">
            At <span className="text-green-600">PetPursuit</span>, we are passionate about connecting animals in need with loving families. Our mission is to rescue, rehome, and promote responsible pet ownership, ensuring every pet in our care finds a safe and nurturing environment.
          </p>
        </section>

        <section className="p-6 bg-white shadow-md rounded-lg mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            <span className="text-green-600">PetPursuit's mission</span> is to rescue and rehome animals, promote responsible pet ownership, and raise awareness about animal welfare issues in our community. We strive to provide a safe and nurturing environment for every pet in our care.
          </p>
        </section>

        <section className="p-6 bg-white shadow-md rounded-lg mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            We envision a world where every pet is valued, cherished, and provided with a loving home. <span className="text-green-600">PetPursuit</span> aspires to create a society that respects and protects the well-being of all animals, ensuring every pet has the opportunity to thrive.
          </p>
        </section>

        <section className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Adoption Categories</h2>
          <p className="text-gray-700 leading-relaxed mb-2">Explore our adoption services for various types of pets:</p>
          <ul className="list-none pl-0 text-gray-700">
            <li>Dogs</li>
            <li>Cats</li>
            <li>Rabbits</li>
            <li>Exotics</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Whether you're looking for a loyal companion, a playful feline friend, an adorable bunny, or an exotic pet to add excitement to your life, <span className="text-green-600">PetPursuit</span> has you covered.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
