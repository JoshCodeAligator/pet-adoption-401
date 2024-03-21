import React from "react";
import BookingAppointmentController from "@BookAppointment/BookAppointmentController";
const Booking = ({params}) => {
    return (
		<BookingAppointmentController pet_id={params.id}/>
	)
};

export default Booking;
