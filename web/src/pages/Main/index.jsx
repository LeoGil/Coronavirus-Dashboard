import React, { useEffect, useState } from 'react';
import { NotificationContainer } from 'react-notifications';
// NotificationManager
import 'react-notifications/lib/notifications.css';
import Loading from 'react-loading';

import api from '../../services/api';

import GlobalCard from '../../components/GlobalCard';
import CountryCard from '../../components/CountryCard';
import TimeLine from '../../components/TimeLine';
import PieCases from '../../components/PieActiveDeathRecovered';

import './style.css';

export default function Main() {
  const [countries, setCountries] = useState([]);
  const [globalData, setGlobalData] = useState([]);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [lastUpdatedSeconds, setLastUpdatedSeconds] = useState(0);
  const [updatePageCount, setUpdatePageCount] = useState(0);
  const [timelineGlobal, setTimelineGlobal] = useState();
  const [chartLoaded, setChartLoaded] = useState(false);

  // Get Country Data
  useEffect(() => {
    const loadCountryData = async () => {
      const response = await api.get(`/countries`);

      response.data = Object.values(response.data);

      setCountries(response.data);
      setChartLoaded(false);
    };

    const loadGlobalData = async () => {
      const response = await api.get(`/global`);
      setGlobalData(response.data);
      setChartLoaded(false);
    };
    loadCountryData();
    loadGlobalData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updatePageCount]);

  useEffect(() => {
    let interval = null;
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

  useEffect(() => {
    api.get(`/global_timeline`).then(response => {
      setTimelineGlobal(response.data);
      setIsPageLoaded(true);
      setChartLoaded(true);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isPageLoaded === false ? (
    <div className="loading">
      <Loading type="bars" color="#eee" />
    </div>
  ) : (
      <div className="container-fluid">
        <NotificationContainer />

        <div className="row">
          <div className="col-8">
            <section className="chart-div">
              <TimeLine timeline={timelineGlobal} timelineDataLoaded={chartLoaded} />
            </section>
          </div>
          <div className="col-4">
            <section className="chart-div">
              <PieCases data={globalData} timelineDataLoaded={chartLoaded} pageLoaded={isPageLoaded} />
            </section>
          </div>
        </div>
        <GlobalCard globaldata={globalData} />

        <div className="row justify-content-md-center">
          <div className="col-12">
            <h1 className="text-center text-white title-components">
              Countries Data
          </h1>
          </div>
          {countries.map(dataMap => (
            <CountryCard key={dataMap.country} country={dataMap} />
          ))}
        </div>
      </div>
    );
}