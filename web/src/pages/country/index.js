import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import api from '../../services/api';

import './style.css'

export default function Country() {
    const { code } = useParams();
    const [country, setCountry] = useState([]);

    //Get Country Data
    useEffect(() => {
        api.get(`/country/${code}`).then(response => {
            setCountry(response.data);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //Widget thevirustracker
    useEffect(() => {
        const script = document.createElement("script");

        script.src = "https://embed.thevirustracker.com/embed.js";
        script.async = true;

        document.body.appendChild(script);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="row justify-content-center text-white align-items-center vh-100">
            <div
                className="thevirustracker-widget"
                data-ccountryid={code}
                data-base="ALLDATA"
            >
            </div>
        </div>
    )
}