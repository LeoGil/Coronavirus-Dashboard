import React, { useEffect, useState } from 'react';
import { NotificationContainer } from 'react-notifications';
// NotificationManager
import 'react-notifications/lib/notifications.css';
import Loading from 'react-loading';

import * as Chart from 'chart.js';
import api from '../../services/api';

import GlobalCard from '../../components/GlobalCard';
import CountryCard from '../../components/CountryCard';

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

  useEffect(() => {
    if (isPageLoaded === true && chartLoaded === true) {
      const timelinedates = [];
      const timelinedataCases = [];
      const timelinedataDeaths = [];
      const timelinedataRecovered = [];

      Object.keys(timelineGlobal.cases).forEach(key => {
        timelinedates.push(key);
        timelinedataCases.push(timelineGlobal.cases[key]);
      });

      Object.keys(timelineGlobal.deaths).forEach(key => {
        timelinedataDeaths.push(timelineGlobal.deaths[key]);
      });

      Object.keys(timelineGlobal.recovered).forEach(key => {
        timelinedataRecovered.push(timelineGlobal.recovered[key]);
      });

      const cav = document.getElementById(`global_timeline`).getContext('2d');
      new Chart(cav, {
        type: 'line',
        options: {
          tooltips: {
            mode: 'index',
            intersect: false,
          },
          legend: {
            labels: {
              fontColor: 'white',
            },
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  fontColor: 'white',
                },
              },
            ],
            xAxes: [
              {
                ticks: {
                  fontColor: 'white',
                },
              },
            ],
          },
        },

        data: {
          labels: timelinedates,
          datasets: [
            {
              label: 'Total Cases',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(14, 233, 203,0.4)',
              borderColor: '#0ee9cb',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: '#0ee9cb',
              pointBackgroundColor: '#0ee9cb',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: '#0ee9cb',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 2,
              pointHitRadius: 5,
              data: timelinedataCases.map(item => item),
            },
            {
              label: 'Total Recovered',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(52, 127, 213,0.4)',
              borderColor: '#347fd5',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: '#347fd5',
              pointBackgroundColor: '#347fd5',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: '#347fd5',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 2,
              pointHitRadius: 5,
              data: timelinedataRecovered.map(item => item),
            },
            {
              label: 'Total Deaths',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(243, 83, 83,0.4)',
              borderColor: '#f35353',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: '#f35353',
              pointBackgroundColor: '#f35353',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: '#f35353',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 2,
              pointHitRadius: 5,
              data: timelinedataDeaths.map(item => item),
            },
          ],
        },
      });

      const cavPie = document.getElementById(`global_area`);
      new Chart(cavPie, {
        type: 'pie',
        data: {
          labels: [
            // "World Population",
            'Active',
            'Recovered',
            'Death',
          ],
          datasets: [
            {
              backgroundColor: [
                // "#3e95cd",
                '#ffc137',
                '#347fd5',
                '#f35353',
              ],
              data: [
                // globalData.population,
                globalData.active,
                globalData.recovered,
                globalData.deaths,
              ],
            },
          ],
        },
        options: {
          legend: {
            labels: {
              fontColor: 'white',
            },
          },
        },
      });
    }
  }, [isPageLoaded, chartLoaded, timelineGlobal, globalData]);

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
            <h2 className="text-white">
              Timeline Global Cases, Deaths and Recovered
            </h2>
            <canvas className="mt-4" height="120px" id="global_timeline" />
          </section>
        </div>
        <div className="col-4">
          <section className="chart-div">
            <h2 className="text-white">
              Global Active cases, Deaths and Recovered
            </h2>
            <canvas className="mt-4" height="120px" id="global_area" />
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
