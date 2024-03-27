"use client"

import React, {useEffect, useState} from 'react'
import BookAppointmentView from "@BookAppointment/BookAppointmentView";
import {
    getBookedTimesOfWeek,
    insertAppointment,
    petExists,
    updatePetStatusToBooked
} from "@BookAppointment/BookAppointmentAPI";
import BookedTimes from "@BookAppointment/BookedTimes";
import {getSessionUserID} from "@/lib";
import {redirect, useRouter} from "next/navigation";
import Error from "next/error";

const BookingController = ({pet_id}) => {
    const [weekStartDate, setWeekStartDate] = useState(new Date())
    const [unavailableTimes, setUnavailableTimes] = useState(new BookedTimes([]))
    const [serverError, setServerError] = useState(false)


    // some sort of error checking if pet_id exists or not in db
    // possible if directly type URL
    const [validPet, setValidPet] = useState(true)

    useEffect(() => {
        petExists(pet_id).then(
            (result) => {
                setValidPet(result)
            }
        )
    }, [pet_id]);

    const router = useRouter()

    // upon loading of page, get all booked times for a centre and week starting from current date
    useEffect(() => {
        getBookedTimesOfWeek(weekStartDate, pet_id).then(
            ({success, error, data}) => {
                // console.log("getBookedTimesOfWeek: ", data)

                setUnavailableTimes(new BookedTimes(data))
        })
    }, [pet_id, weekStartDate]);

    function updateWeekStartDate(startDate) {
        setWeekStartDate(startDate)
    }

    async function addNewAppointment(date, time) {

        try {
            const accountID = await getSessionUserID()

            if (accountID === -1) {
                redirect('/login')
                alert("Due to inactivity, your session has timed out. Log in.")
                // safety measure in case cookie expires while on page (due to inactivity)
                return
            }


            const addAppointmentResult = await insertAppointment(date, time, pet_id, accountID)
            // success, go back to home
            if (addAppointmentResult) {
                // update pet status
                updatePetStatusToBooked(pet_id).then(r => {
                })

                router.push('/')
                alert(`Booking made at: ${date.toDateString()}, ${time}`)

            }
            // failed, most likely due to db error
            else {
                // refresh page
                router.refresh()
                alert('Booking failed. Most likely due to a server error. Try again.')
            }
        }
        catch (e) {
            // console.log(e)
            setServerError(true)
        }
    }

    // essentially same logic as in ViewPetController
    // means same time of 1s lag before 404 shows up
    if (!validPet) {
        return <Error statusCode={404}/>
    }

    // return 500 error if catch a server error
    if (serverError) {
        return <Error statusCode={500}/>
    }

    return (
        <BookAppointmentView unavailbleTimes={unavailableTimes} updateWeekStart={updateWeekStartDate}
                             bookAppointment={addNewAppointment}/>
    )
}

export default BookingController
