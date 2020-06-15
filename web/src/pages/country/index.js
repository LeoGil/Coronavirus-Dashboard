import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import api from '../../services/api';

import './style.css'

// interface Country {
//         info: {
//           ourid: number,
//           title: string
//           code: string
//           source: string
//         },
//         total_cases: number,
//         total_recovered: number,
//         total_unresolved: number,
//         total_deaths: number,
//         total_new_cases_today: number,
//         total_new_deaths_today: number,
//         total_active_cases: number,
//         total_serious_cases: number,
//         total_danger_rank: number,
// }

export default function Country() {
    const { code } = useParams();
    const [country , setCountry] = useState([]);

    //Get Country Data
    useEffect(()=>{
        api.get(`/country/${code}`).then( response => {
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
            {console.log(country.code)}
            <div 
                className="thevirustracker-widget" 
                data-ccountryid={code} 
                data-base="ALLDATA"
            ></div>
            <div className="col-12 text-center">
                <p>{country.code}</p>
            </div>
        </div>
    )
}