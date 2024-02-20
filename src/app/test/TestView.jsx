"use client"

import Navbar from "@components/Navbar";
import {useState} from "react";

// simply what the view of the page is
// should not do any data formatting, meaning should use data as is
export const TestView = ({petData}) => {
    let data = petData

    const [pets, setPets] = useState(data)
    const [visible, setVisible] = useState(false)

    const onClick = () => {
        console.log(pets)
        if (visible) {
            setPets([])
            setVisible(false)
        }
        else {
            setPets(data)
            setVisible(true)
        }
    }

    return (
        <>
            <Navbar/>

            <div className="absolute top-20">
                {/* <Navbar/> */}
                <button onClick={onClick}>
                    Display
                </button>
                {pets.map((pet, index) => (
                    <p key={index}>
                        {pet.toString()}
                    </p>
                ))}
            </div>
        </>
    )
}