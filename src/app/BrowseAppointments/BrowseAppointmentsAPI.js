"use server"

import query from "@/db/setup/db"; // Database connection


// Function to fetch appointments booked by a specific user
export async function getBookedAppointments(getSessionUserID) {
    try {
       
        // Query the database to fetch booked appointments for the given user

        const clientIDResult = await getClientID(getSessionUserID.value)
        const clientID = clientIDResult[0].client_id

        const appointments = await query(`
        SELECT 
            Appointment.*, 
            Pet.name AS pet_name,
            RescueCentre.name AS centre_name,
            RescueCentre.address AS centre_address
        FROM 
            Appointment
        INNER JOIN 
            Pet ON Appointment.pet_id = Pet.pet_id
        INNER JOIN 
            RescueCentre ON Appointment.centre_id = RescueCentre.centre_id
        WHERE 
            Appointment.client_id = ?
    `, [clientID]);
        // Return the fetched appointments
       return appointments
    } catch (error) {
        console.error("Error fetching appointments:", error);
    }
}

async function getClientID(accountID) {
    return await query(
        'SELECT client_id FROM Client WHERE account_id = ?',
        [accountID]
    )
}

export async function removeAppointment(appointment_id) {
    try {
        // Query the database to remove the appointment with the given ID
        const response = await query("DELETE FROM Appointment WHERE appointment_id = ?", [appointment_id]);
        // Return the response
        return response;
    } catch (error) {
        console.error("Error removing appointment:", error);
    }
}

export default getBookedAppointments;