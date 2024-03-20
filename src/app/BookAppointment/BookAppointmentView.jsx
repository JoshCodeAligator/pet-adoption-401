import Navbar from "@components/Navbar";
import { useState } from "react";
import Book from "./Book";

const BookAppointmentView = ({unavailbleTimes}) => {
  // State to keep track of the selected appointment type and animal type

  return (
    <div className="mx-auto max-w-screen-lg">
      <Navbar className="mt-10" />
      <Book unavailableTimes={unavailbleTimes}/>
    </div>
  );
};

export default BookAppointmentView;
