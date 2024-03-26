"use client"

import Navbar from "@components/Navbar";
import CreateClientAccountForm from "@CreateAccount/client/CreateClientAccountForm";

const ClientCreateAccountView = ({ onSubmit, errorFlag, errorMessage }) => {
    return (
        <div className="flex flex-col h-screen relative ">
        <div className="flex flex-col h-screen relative ">
            {/* Navbar in the first row */}
            <Navbar />
            <div className="background">
				 {/* spans for the animated background */}
				 <span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				{/*  end of animated background */}
			</div>
            {/* CreateClientAccountForm in the second row */}
            <div className="flex-grow flex flex-col justify-center items-center background">
            {/* spans for the animated background */}
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {/*  end of animated background */}
                <div className="flex flex-col items-center">
                    <CreateClientAccountForm 
                        onSubmit={onSubmit}
                        createErrorFlag={errorFlag}
                        createErrorMessage={errorMessage}
                        />
                        />
                </div>
            </div>
        </div>
    );
}

export default ClientCreateAccountView;
