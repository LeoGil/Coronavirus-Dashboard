import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { NotificationContainer } from 'react-notifications';
//NotificationManager
import 'react-notifications/lib/notifications.css';

import GlobalData from '../../components/Global'
import CountryCard from '../../components/CountryCard'

export default function Main() {
    const [countries, setCountries] = useState([]);
    const [globalData, setGlobalData] = useState([]);

    //Get Country Data
    useEffect(()=>{
        const loadCountryData = async () => {
            const response = await api.get(`/countries`);
            setCountries(response.data);
    
        }
    
        const loadGlobalData = async () => {
            const response = await api.get(`/global`);
            setGlobalData(response.data);
        }
        loadCountryData()
        loadGlobalData()
        const interval = setInterval(() => { loadCountryData(); loadGlobalData() }, 10000);
        clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log('Testando quantas vezes essa porra executa');
    return (
        <div className="container-fluid">
            <NotificationContainer />
            <div className="container">
                <GlobalData globaldata={globalData} />
            </div>
            <div className="row justify-content-md-center">
                {countries.map(data_map => (
                    <CountryCard
                        key={data_map.ourid}
                        country={data_map} />
                ))}
            </div >
        </div >
    )
}