"use client"
import React, { useState } from "react";
import { HomeIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import Link from "next/link";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="bg-gray-900 py-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex-shrink-0">
          <Link
            href="/"
            className="flex items-center text-white text-xl font-bold"
          >
            <HomeIcon className="h-8 w-8 mr-2" />
            <span>Home</span>
          </Link>
        </div>
        <div className="text-white text-lg lg:flex hidden">
          <Link href="/about" className="ml-6">
            <span>About</span>
          </Link>
          <Link href="/contact" className="ml-6">
            <span>Contact</span>
          </Link>
          <Link href="/public" className="ml-6">
            <span>Donate</span>
          </Link>
        </div>
        <div className="lg:hidden">
          {isSidebarOpen ? (
            <XIcon
              className="h-9 w-9 text-white mr-4 cursor-pointer"
              onClick={toggleSidebar}
            />
          ) : (
            <MenuIcon
              className="h-9 w-9 text-white mr-4 cursor-pointer"
              onClick={toggleSidebar}
            />
          )}
        </div>
      </div>
      {isSidebarOpen && (
        <div className="lg:hidden">
          <div className="flex flex-col items-center text-white mt-4">
            <Link href="/about" className="my-2 hover:text-gray-300">
              About
            </Link>
            <Link href="/contact" className="my-2 hover:text-gray-300">
              Contact
            </Link>
            <Link href="/public" className="my-2 hover:text-gray-300">
              Donate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
