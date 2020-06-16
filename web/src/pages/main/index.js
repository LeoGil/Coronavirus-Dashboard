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

    //Get Country Data
    useEffect(() => {
        const loadCountryData = async () => {
            const response = await api.get(`/countries`);
            setCountries(response.data);
        }

        const loadGlobalData = async () => {
            const response = await api.get(`/global`);
            setGlobalData(response.data);
            setIsPageLoaded(true)
        }
        loadCountryData()
        loadGlobalData()
        const interval = setInterval(() => {
            loadCountryData();
            loadGlobalData()
        }, 10000);
        clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return isPageLoaded === false
        ? (
            <div className="d-flex vh-100 justify-content-center align-items-center">
                <Loading type={"bars"} color={"#eee"} />
            </div>
        )
        : (
            <div className="container-fluid">
                <NotificationContainer />
                {/* <div className="container-fluid"> */}
                <GlobalCard globaldata={globalData} />
                {/* </div> */}
                <div className="row justify-content-md-center">
                    <div className="col-12">
                        <p class="text-center text-white title-components">Countries Data</p>
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