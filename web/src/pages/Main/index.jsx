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
import RecentChange from '../../components/RecentChanges';
import PieCases from '../../components/PieActiveDeathRecovered';

import { ChartsStyle, GlobalDataHeader } from './styles';



export default function Main() {
  const [countries, setCountries] = useState([]);
  const [oldCountries, setOldCountries] = useState([]);
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

      // response.data[1]['cases'] = 2213167 + Math.floor(Math.random() * 10);
      // response.data[1]['recovered'] = 749928 + Math.floor(Math.random() * 10);
      // response.data[0]['deaths'] = 316828 + Math.floor(Math.random() * 10);

      if (countries[0] !== undefined) {
        setOldCountries(countries)
      }

      setCountries(response.data)
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

        <ChartsStyle>
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
          <section className="chart-div recent-changes">
            {/* {(oldCountries[0] !== undefined && console.log(`Old: ${oldCountries[0]['cases']} novo: ${countries[0]['cases']}`))} */}
            <RecentChange stateAtual={oldCountries} stateNovo={countries} />
          </section>
        </ChartsStyle>

        <GlobalDataHeader>
          <div className="row">
            <div className="col-xl-3 col-lg-12 global-data">
              <GlobalCard globaldata={globalData} />
            </div>
            <div className="col-xl-9 col-lg-12 countries-data">
              <h1 className="col-12 title-components">
                Countries Data
              </h1>
              <div className="countries-panel">

                {countries.map(dataMap => (
                  <CountryCard key={dataMap.country} country={dataMap} />
                ))}
              </div>
            </div>
          </div>
        </GlobalDataHeader>
      </div >
    );
}
