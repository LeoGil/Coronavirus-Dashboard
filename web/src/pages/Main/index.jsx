import React, { useEffect, useState } from 'react';
import { NotificationContainer } from 'react-notifications';
// NotificationManager
import 'react-notifications/lib/notifications.css';
import Loading from 'react-loading';

import api from '../../services/api';

import GlobalCard from '../../components/GlobalCard';
import CountryCard from '../../components/CountryCard';
import TimeLine from '../../components/TimeLine';
import TimeLineCountries from '../../components/TimeLineCountries';
import PieCases from '../../components/PieActiveDeathRecovered';

import { GlobalDataHeader, HiddenChartonMobile } from './styles';

export default function Main() {
  const [countries, setCountries] = useState([]);
  const [globalData, setGlobalData] = useState([]);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [lastUpdatedSeconds, setLastUpdatedSeconds] = useState(0);
  const [updatePageCount, setUpdatePageCount] = useState(0);
  const [timelineGlobal, setTimelineGlobal] = useState();
  const [chartLoaded, setChartLoaded] = useState(false);
  const [pieLoaded, setPieLoaded] = useState(false);

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
      setPieLoaded(true);
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
      <GlobalDataHeader>
        <div className="global-data">
          <GlobalCard globaldata={globalData} />
        </div>

        <div className="charts">
          <HiddenChartonMobile>
            <section className="chart-div">
              <TimeLine
                timeline={timelineGlobal}
                timelineDataLoaded={chartLoaded}
              />
            </section>
            <section className="chart-div">
              <TimeLineCountries countries={countries} />
            </section>
            <section className="chart-div">
              <PieCases data={globalData} timelineDataLoaded={pieLoaded} />
            </section>
          </HiddenChartonMobile>
        </div>
      </GlobalDataHeader>

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
