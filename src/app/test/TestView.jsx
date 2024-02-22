"use client"

import Navbar from "@components/Navbar";
import {useState} from "react";

// simply what the view of the page is
// should not do any data formatting, meaning should use data as is
export const TestView = ({petData}) => {
    const [visible, setVisible] = useState(false)

    const onClick = () => {
        if (visible) {
            setVisible(false)
        }
        else {
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
                {visible &&
                    <>
                        {petData.map((pet, index) => (
                            <p key={index}>
                                {pet.id + " " + pet.name + "\n\n"}
                            </p>
                        ))}
                    </>
                }
            </div>
        </>
    )
}