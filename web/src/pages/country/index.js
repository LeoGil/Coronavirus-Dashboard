import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";

import './style.css'

export default function Country() {
    const { code } = useParams()

    useEffect(() => {
        const script = document.createElement("script");

        script.src = "https://embed.thevirustracker.com/embed.js";
        script.async = true;

        document.body.appendChild(script);
    }, [])

    return (
        <div className="d-flex justify-content-center text-white align-items-center vh-100">
            <div className="thevirustracker-widget" data-ccountryid={code} data-base="ALLDATA"></div>
        </div>
    )
}