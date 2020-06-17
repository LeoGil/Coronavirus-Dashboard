import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { NotificationContainer } from 'react-notifications';
//NotificationManager
import 'react-notifications/lib/notifications.css';
import Loading from 'react-loading';

import GlobalCard from '../../components/GlobalCard'
import CountryCard from '../../components/CountryCard'

export default function Main() {
    const [countries, setCountries] = useState([]);
    const [globalData, setGlobalData] = useState([]);
    const [isPageLoaded, setIsPageLoaded] = useState(false);
    const [lastUpdatedSeconds, setLastUpdatedSeconds] = useState(0);
    const [updatePageCount, setUpdatePageCount] = useState(0);

    //Get Country Data
    useEffect(() => {
        const loadCountryData = async () => {
            const response = await api.get(`/countries`);
            setCountries(response.data);
        }

        const loadGlobalData = async () => {
            const response = await api.get(`/global`);
            setGlobalData(response.data);
            setIsPageLoaded(true);
        }
        loadCountryData();
        loadGlobalData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updatePageCount]);


    useEffect(() => {
        let interval = null
        if (isPageLoaded) {
            interval = setInterval(() => {
                setLastUpdatedSeconds(lastUpdatedSeconds => lastUpdatedSeconds + 1);
                if (lastUpdatedSeconds % 10 === 0 && lastUpdatedSeconds !== 0) {
                    setUpdatePageCount(updatePageCount => updatePageCount + 1);
                    setLastUpdatedSeconds(0);
                }
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isPageLoaded, lastUpdatedSeconds]);

    return isPageLoaded === false
        ? (
            <div className="d-flex vh-100 justify-content-center align-items-center">
                <Loading type={"bars"} color={"#eee"} />
            </div>
        )
        : (
            <div className="container-fluid">

                <NotificationContainer />

                <GlobalCard globaldata={globalData} />

                <div className="row justify-content-md-center">
                    <div className="col-12">
                        <p className="text-center text-white title-components">Countries Data</p>
                    </div>
                    {countries.map(data_map => (
                        <CountryCard
                            key={data_map.ourid}
                            country={data_map} />
                    ))}
                </div >
            </div >
        )
}