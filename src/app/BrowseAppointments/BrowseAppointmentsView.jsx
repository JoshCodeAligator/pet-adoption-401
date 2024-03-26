"use client"

import React, { useState, useEffect } from "react";
import { getBookedAppointments } from "./BrowseAppointmentsAPI";
import { fetchAppointments } from "./BrowseAppointmentsController";
import Navbar from "@components/Navbar";
import { getSessionUserID } from "@/lib";


const BrowseAppointments = ({ appointments }) => {
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
                                {/* Render appointment details */}
                            {appointments && appointments.map(appointment => (
                                <div key={appointment.appointment_id}>
                                    <p>Appointment ID: {appointment.appointment_id}</p>
                                    <p>Date: {new Date(appointment.date).toLocaleDateString()}</p>
                                    <p>Start Time: {appointment.start_time}</p>
                                    <p>Client ID: {appointment.client_id}</p>
                                    <p>Centre ID: {appointment.centre_id}</p>
                                    {/* could get pet information from pet and display pets name and picture here */}
                                    <p>Pet ID: {appointment.pet_id}</p>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default BrowseAppointments;
