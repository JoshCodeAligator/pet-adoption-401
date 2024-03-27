import React from "react";
import Navbar from "@components/Navbar";
import { removeAppointment } from "./BrowseAppointmentsAPI";

const BrowseAppointments = ({ appointments}) => {
    // Function to handle deletion of an appointment
    const handleDelete = (appointmentId) => {
        // Implement deletion logic here
        removeAppointment(appointmentId);
        // console.log("Deleting appointment with ID:", appointmentId);
        window.location.reload();
    };

    return (
        <div>
            <Navbar />
            <div className="absolute top-10 left-10 right-0 bottom-0">
                <div className="flex flex-grow">
                    {/* Left Side */}
                    <div className="flex flex-col items-center justify-center w-1/2 p-8 mt-10">
                        {/* Moves the image inside the left side div */}
                        <div className="w-80 h-80 relative">
                            <h2 className="mb-4 text-lg font-semibold">Your Appointments:</h2>
                            {/* Render appointment details */}
                            {appointments && appointments.map(appointment => (
                                <div key={appointment.appointment_id} className="mb-6 flex justify-between items-center">
                                    <div>
                                        <p><strong>Appointment ID:</strong> {appointment.appointment_id}</p>
                                        <p><strong>Date:</strong> {new Date(appointment.date).toLocaleDateString()}</p>
                                        <p><strong>Start Time:</strong> {appointment.start_time}</p>
                                        <p><strong>Centre Name:</strong> {appointment.centre_name}</p>
                                        <p><strong>Centre Address:</strong> {appointment.centre_address}</p>
                                        {/* could get pet information from pet and display pets name and picture here */}
                                        <p><strong>Pet Name:</strong> {appointment.pet_name}</p>
                                    </div>
                                    {/* Delete Button */}
                                    <button 
                                        onClick={() => handleDelete(appointment.appointment_id)}
                                        className="flex flex-end bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    >
                                        Cancel 
                                    </button>
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
