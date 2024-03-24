import query from "@/db/setup/db"; // Database connection
import { getSessionUserID } from "@/lib";

// Function to fetch appointments booked by a specific user
export async function getBookedAppointments(userId) {
    try {
        // Query the database to fetch booked appointments for the given user
        console.log("userId: ", getSessionUserID)
        const appointments = await query("SELECT * FROM Appointments WHERE userId = ?", [userId]);

        // Format the data as needed (e.g., convert date formats, sanitize data)
        // Example formatting: appointments.map(appointment => ({ id: appointment.id, date: formatDate(appointment.date), ... }));

        // Return the fetched appointments
        return {
            success: true,
            data: appointments
        };
    } catch (error) {
        console.error("Error fetching appointments:", error);
        return {
            success: false,
            error: "Error fetching appointments"
        };
    }
}
