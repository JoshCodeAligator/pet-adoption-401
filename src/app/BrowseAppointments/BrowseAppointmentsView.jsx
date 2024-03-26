"use client"

import React, { useState, useEffect } from "react";
import { getBookedAppointments } from "./BrowseAppointmentsAPI";
import { fetchAppointments } from "./BrowseAppointmentsController";
import Navbar from "@components/Navbar";
import { getSessionUserID } from "@/lib";


const BrowseAppointments = ({ appointments }) => {
    console.log("Appointments2", appointments)
    return (
        <div>
            <Navbar /> 
                <div className="absolute top-10 left-10 right-0 bottom-0">
                    <div className="flex flex-grow">
                    {/* Left Side */}
                        <div className="flex flex-col items-center justify-center w-1/2 p-8 mt-10">
                    {/* Moves the image inside the left side div */}
                            <div className="w-80 h-80 relative">
                                <h2> Your Appointments: {} </h2>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default BrowseAppointments;
