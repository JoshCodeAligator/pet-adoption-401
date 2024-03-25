"use client"
import React, { useState } from "react";
import { HomeIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useEffect } from "react";
import {deleteSession, getSession} from "@/lib";


const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    async function checkSession() {
      const session = await getSession();
      if (session) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    }

    checkSession();
  }, []);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = async () => {
    await deleteSession();
    setLoggedIn(false); // Update loggedIn state after logout
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
          {loggedIn ? (
        <Link href="/BrowseAppointments" className="ml-6">
          <span>View Appointments</span>
        </Link>
                      ) : (
        <Link href="/client/CreateAccount" className="ml-6">
          <span>Create Account</span>
        </Link>
                      )}
          {loggedIn ? (
        <Link href="/" className="ml-6" onClick={handleLogout}>
          <span>Log Out</span>
        </Link>
                      ) : (
        <Link href="/login" className="ml-6">
          <span>Log In</span>
        </Link>
                      )}
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
      {/* Sidebar for smaller window size */}
      {isSidebarOpen && (
        <div className="lg:hidden">
          <div className="flex flex-col items-center text-white mt-4">
            <Link href="/about" className="my-2 hover:text-gray-300">
              About
            </Link>
            <Link href="/client/CreateAccount" className="my-2 hover:text-gray-300">
              Create Account
            </Link>
            <Link href="/login" className="my-2 hover:text-gray-300">
              Log In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;