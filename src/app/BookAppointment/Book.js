import BrowseOrderButton from "@/components/BrowseOrderButton";
import React, { useCallback, useState } from "react";

const Book = ({
  appointmentType,
  unavailableTimes,
  updateStartDate,
  makeBooking,
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // unavailableTimes is a BookedTimes object

  const goToNextWeek = () => {
    const nextWeek = new Date(startDate);
    nextWeek.setDate(nextWeek.getDate() + 7);
    setStartDate(nextWeek);

    // update unavailableTimes
    updateStartDate(nextWeek);
  };

  const isStartDateToday = () => {
    return startDate.toDateString() === new Date().toDateString();
  };

  const goToPrevWeek = () => {
    // do nothing if attempt to go into past
    if (isStartDateToday()) return;
    // for some reason above equality fails, prob due to time, seconds off

    const prevWeek = new Date(startDate);
    prevWeek.setDate(prevWeek.getDate() - 7);
    setStartDate(prevWeek);

    // update unavailableTimes
    updateStartDate(prevWeek);
  };

  // Function to handle selecting a day and time
  const handleDateTimeClick = (day, time) => {
    setSelectedDay(day);
    setSelectedTime(time);
  };

  const bookAppointment = () => {
    // don't do anything if no slot selected
    if (selectedDay && selectedTime) {
      // need to convert selectedDay to a date object
      const selectedDate = new Date(selectedDay);
      console.log(selectedDate);
      makeBooking(selectedDate, selectedTime);
    }
  };
  // Function to generate time slots for a day
  const generateTimeSlots = (date) => {
    const timeSlots = [];
    for (let i = 9; i <= 17; i++) {
      const time = `${i < 10 ? "0" + i : i}:00`;
      const isBooked = unavailableTimes.timeIsBooked(date, time);
      console.log("From time slot: ", date, time, isBooked);
      timeSlots.push(
        <button
          key={time}
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
            selectedDay === date && selectedTime === time
              ? "border-2 border-blue-700"
              : ""
          } ${isBooked ? "bg-gray-400 cursor-not-allowed" : ""}`}
          onClick={() => handleDateTimeClick(date, time)}
          disabled={isBooked}
        >
          {time}
        </button>
      );
    }
    return timeSlots;
  };

  // Function to generate date buttons for a week
  const generateDateButtons = () => {
    const days = [];
    const currentDate = new Date(startDate);

    // Loop through the next 7 days from startDate
    for (let i = 0; i < 7; i++) {
      const date = new Date(currentDate);
      date.setDate(date.getDate() + i);
      const dateString = date.toDateString();
      days.push(
        <div key={dateString} className="flex flex-col items-center">
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
              selectedDay === date ? "border-2 border-blue-700" : ""
            }`}
            onClick={() => setSelectedDay(date)}
          >
            {date.toDateString()} {/* Display date */}
          </button>
          <div className="flex flex-wrap justify-center mt-2">
            {generateTimeSlots(date)}
          </div>
        </div>
      );
    }
    return days;
  };

  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-2xl font-bold mb-4">
        {appointmentType} Appointments
      </h1>
      <div className="flex justify-between my-4">
        <button
          onClick={goToPrevWeek}
          className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded 
            ${isStartDateToday() ? "bg-gray-400 cursor-not-allowed" : ""}`}
          disabled={isStartDateToday()}
        >
          &lt; Previous Week
        </button>
        <button
          onClick={goToNextWeek}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
        >
          Next Week &gt;
        </button>
      </div>
      <div className="grid grid-cols-7 gap-4">{generateDateButtons()}</div>
      <div className="mt-4">
        {selectedDay && selectedTime && (
          <p>
            Selected Day: {selectedDay.toDateString()}, Time: {selectedTime}
          </p>
        )}
        <button
          onClick={bookAppointment}
          className="font-bold bg-orange-500 hover:bg-emerald-500 text-white rounded-full px-8 py-4 mr-4 text-lg"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default Book;
