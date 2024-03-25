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