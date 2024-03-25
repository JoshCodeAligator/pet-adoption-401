// controller class
import React, { useState, useEffect } from "react";
import { getBookedAppointments } from "./BrowseAppointmentsAPI";
import { getSession } from "@/lib";
import { getSessionUserID } from "@/lib";


export const fetchAppointments = async () => {
    try {
        // Fetch booked appointments for the current user
        const response = await getBookedAppointments();
        
        if (response.success) {
            // Update state with fetched appointments
            console.log("Appointments fetched successfully:", response.data);
        } else {
            // Handle error
            console.error(response.error);
        }
    } catch (error) {
        console.error("Error fetching appointments:", error);
    }
};
