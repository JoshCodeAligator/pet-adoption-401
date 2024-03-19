import Navbar from "@components/Navbar";
import { useState } from "react";
import Book from "./Book";

const BookAppointmentView = () => {
  // State to keep track of the selected appointment type and animal type
  const [selectedAppointmentType, setSelectedAppointmentType] = useState(false);
  const [animalType, setAnimalType] = useState("");

  // BookingRow component defined inside BookAppointmentView component
  const BookingRow = ({ appointmentType }) => {
    return (
      <div className="mt-5 flex border rounded-lg overflow-hidden shadow-md bg-gray-100">
        <div className="flex-1 py-4 px-6">
          <div className="text-xl font-semibold mb-1 text-gray-800">
            {appointmentType} Appointment
          </div>
          <div className="text-sm text-gray-600 mb-3">1 hour</div>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => {
              setSelectedAppointmentType(true);
              setAnimalType(appointmentType);
            }}
            className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:opacity-90 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
          >
            Book Now
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="mx-auto max-w-screen-lg">
      <Navbar className="mt-10" />
      {!selectedAppointmentType ? (
        <div>
          <h1 className="text-center text-4xl font-bold mb-8 mt-20">
            PetPursuit
          </h1>
          <h2 className="text-center text-xl mb-4">
            Thank you for supporting PetPursuit!
          </h2>
          <p className="text-center max-w-lg mx-auto mb-8">
            For adopters: Please limit booking to one household per day. If you
            are unable to make your appointment, please cancel it so others can
            book in (this helps animals go home faster!)
          </p>
          <p className="text-center mb-8">Thank you!</p>

          <h1 className="text-center text-3xl font-bold mb-4">
            Select Appointment
          </h1>

          {/* Render BookingRow components */}
          <BookingRow appointmentType="Cat" />
          <BookingRow appointmentType="Dog" />
          <BookingRow appointmentType="Exotics" />
          <BookingRow appointmentType="Rabbits" />
        </div>
      ) : (
        <Book appointmentType={animalType} />
      )}
    </div>
  );
};

export default BookAppointmentView;
