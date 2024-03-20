"use client"

import React, {useEffect, useState} from 'react'
import BookAppointmentView from "@/app/BookAppointment/BookAppointmentView";
import {getBookedTimesOfWeek} from "@/app/BookAppointment/BookAppointmentAPI";

const BookingController = ({pet_id}) => {
    const [weekStartDate, setWeekStartDate] = useState(new Date())
    const [unavailableTimes, setUnavailableTimes] = useState([])

    // upon loading of page, get all booked times for a centre and week starting from current date
    useEffect(() => {
        getBookedTimesOfWeek(weekStartDate, pet_id).then(
            ({success, error, data}) => {
            setUnavailableTimes(data)
        })
    }, [pet_id, weekStartDate]);




    return (
        <BookAppointmentView unavailbleTimes={unavailableTimes}/>
    )
}

export default BookingController
