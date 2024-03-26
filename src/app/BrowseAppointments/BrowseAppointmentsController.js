"use client"

import React, { useState, useEffect } from "react";
import { getBookedAppointments } from "@/app/BrowseAppointments/BrowseAppointmentsAPI";
import { getSessionUserID } from "@/lib";
import BrowseAppointmentsView from "./BrowseAppointmentsView";

const BrowseAppointmentsController = ()=> {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        // Fetch booked appointments when the component mounts
        const fetchAppointments = async () => {
            try {
                // Fetch the current user's session
                const sessionUserID = getSessionUserID();
    
                // Fetch booked appointments for the current user
                const response = await getBookedAppointments(sessionUserID);
                
                if (response) {
                    // Update state with fetched appointments
                    setAppointments(response);
                    console.log("Response", response)
                    console.log("Appointments", appointments)
                } else {
                    // Handle error
                    console.error(response.error);
                }
            } catch (error) {
                console.error("Error fetching appointments:", error);
            }
        };

        fetchAppointments();

    }, []);

    return <BrowseAppointmentsView appointments={appointments} />;
};

export default BrowseAppointmentsController;
