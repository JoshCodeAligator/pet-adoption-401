import React, { useState, useEffect } from "react";
import { getBookedAppointments } from "@BrowseAppointments/BrowseAppointmentsAPI";

const BrowseAccounts = ({ userId }) => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        // Fetch booked appointments when the component mounts
        fetchAppointments();
    }, []);

    const fetchAppointments = async () => {
        try {
            // Fetch booked appointments for the current user
            const response = await getBookedAppointments(userId);
            
            if (response.success) {
                // Update state with fetched appointments
                setAppointments(response.data);
            } else {
                // Handle error
                console.error(response.error);
            }
        } catch (error) {
            console.error("Error fetching appointments:", error);
        }
    };

    return (
        <div>
            <h2>Your Booked Appointments</h2>
            <ul>
                {appointments.map(appointment => (
                    <li key={appointment.appointment_id}>
                        {/* Render appointment details here */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BrowseAccounts;
