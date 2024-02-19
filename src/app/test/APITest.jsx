"use client";

import {useState} from "react";
import getAllPets from "@/app/test/api";

export const APITest = () => {
    const [str, setStr] = useState("")

    const onClick = async () => {
        const res = await getAllPets();
        setStr(JSON.stringify(res))

    }

    return (
        <>
            <button onClick={onClick}>
                Test Button
            </button>
            <p>
                {str}
            </p>

        </>
    )
}