"use client"

import BrowsePetsController from "@/app/BrowsePets/BrowsePetsController";
import {Suspense} from "react";
import Loading from "@BrowsePets/loading";

const BrowsePets = () => {
    return (
        <Suspense fallback={ <Loading/> }>
            <BrowsePetsController/>
        </Suspense>
    );
};

export default BrowsePets;
