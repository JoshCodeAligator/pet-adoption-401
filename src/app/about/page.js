import Navbar from "@/components/Navbar";
import React from "react";
import AboutContent from "@about/AboutContent";


// NO MVC here as this is a static page, thus only has a view

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-pawprint-pattern flex flex-col justify-center items-center py-12">
      {/* Navigation */}
      <Navbar/>

      {/* Main content */}
      <AboutContent/>
    </div>
  );
};

export default AboutPage;
