import React, { useState, useEffect } from "react";
import { getBookedAppointments } from "./BrowseAppointmentsAPI";
import { fetchAppointments } from "./BrowseAppointmentsController";
import Navbar from "@components/Navbar";


const BrowseAppointments = ({  }) => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        // Fetch booked appointments when the component mounts
        fetchAppointments();
    }, []);


    return (
        <div>
        <Navbar />
            <div className="absolute top-10 left-10 right-0 bottom-0">
                <div className="flex flex-grow">
                    <h2>Your Booked Appointments</h2>
                        <ul>
                            {appointments.map(appointment => (
                                <li key={appointment.appointment.id}>
                                    <p>Date: {appointment.date}</p>
                                    <p>Start Time: {appointment.start_time}</p>
                                    {/* Render other appointment details as needed */}
                                </li>
                            ))}
                        </ul>
                </div>
            </div>
        </div>
    );
};

export default BrowseAppointments;
