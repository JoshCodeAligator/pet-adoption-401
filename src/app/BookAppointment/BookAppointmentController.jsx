"use client"

import React, {useEffect} from 'react'
import BookAppointmentView from "@/app/BookAppointment/BookAppointmentView";
import {getBookedTimesOfWeek} from "@/app/BookAppointment/BookAppointmentAPI";

const BookingController = ({pet_id}) => {


    // upon loading of page, get all booked times for a centre and week starting from current date
    useEffect(() => {
        const getUnavailableTimesOfWeek = async () => {
            const {} = await getBookedTimesOfWeek(new Date(), pet_id)
        }
    }, [pet_id]);

    return (
        <BookAppointmentView/>
    )
}

export default BookingController
