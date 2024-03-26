"use server"

import query from "@/db/setup/db"; // Database connection


// Function to fetch appointments booked by a specific user
export async function getBookedAppointments(getSessionUserID) {
    try {
       
        // Query the database to fetch booked appointments for the given user
       
        const appointments = await query("SELECT * FROM Appointment WHERE client_id = ?", [getSessionUserID.value]);
        // Return the fetched appointments
       return appointments
    } catch (error) {
        console.error("Error fetching appointments:", error);
    }
}

export default getBookedAppointments;