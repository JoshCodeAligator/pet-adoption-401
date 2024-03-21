"use client"

import React, {useEffect, useState} from 'react'
import BookAppointmentView from "@BookAppointment/BookAppointmentView";
import {getBookedTimesOfWeek} from "@BookAppointment/BookAppointmentAPI";
import BookedTimes from "@BookAppointment/BookedTimes";

const BookingController = ({pet_id}) => {
    const [weekStartDate, setWeekStartDate] = useState(new Date())
    const [unavailableTimes, setUnavailableTimes] = useState(new BookedTimes([]))

    // upon loading of page, get all booked times for a centre and week starting from current date
    useEffect(() => {
        getBookedTimesOfWeek(weekStartDate, pet_id).then(
            ({success, error, data}) => {
                console.log("getBookedTimesOfWeek: ", data)

                setUnavailableTimes(new BookedTimes(data))
        })
    }, [pet_id, weekStartDate]);

    function updateWeekStartDate(startDate) {
        setWeekStartDate(startDate)
    }

    return (
        <BookAppointmentView unavailbleTimes={unavailableTimes} updateWeekStart={updateWeekStartDate}/>
    )
}

export default BookingController
