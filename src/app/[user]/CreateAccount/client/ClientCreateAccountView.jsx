"use client"

import Navbar from "@components/Navbar";
import CreateClientAccountForm from "@CreateAccount/client/CreateClientAccountForm";

const ClientCreateAccountView = ({ onSubmit, errorFlag, errorMessage }) => {
    return (
        <div className="flex flex-col h-screen">
            {/* Navbar in the first row */}
            <Navbar />
            
            {/* CreateClientAccountForm in the second row */}
            <div className="flex-grow flex flex-col justify-center items-center">
                <div className="flex flex-col items-center">
                    <CreateClientAccountForm 
                        onSubmit={onSubmit}
                        createErrorFlag={errorFlag}
                        createErrorMessage={errorMessage}
                    />
                </div>
            </div>
        </div>
    );
}

export default ClientCreateAccountView;
