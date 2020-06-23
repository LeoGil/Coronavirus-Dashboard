import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from 'react-loading';
import * as Chart from 'chart.js';
import api from '../../services/api';

import CountryData from '../../components/CountryDetailsCard';

import './style.css';

export default function Country() {
  const { country_code: countryCode } = useParams();
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isTimeLineDataLoaded, setIsTimeLineDataLoaded] = useState(false);
  const [country, setCountry] = useState([]);
  const [countryTimeline, setCountryTimeline] = useState([]);

  // Get Country Timeline
  useEffect(() => {
    const loadCountryTimeLine = async () => {
      const response = await api.get(`/country_timeline/${countryCode}`);
      setCountryTimeline(response.data.timeline);
      setIsTimeLineDataLoaded(true);
    };

    loadCountryTimeLine();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Get Country Data
  useEffect(() => {
    const loadCountryData = async () => {
      const response = await api.get(`/country/${countryCode}`);
      setCountry(response.data);
      setIsPageLoaded(true);
    };

    loadCountryData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Mount graph cases
  useEffect(() => {
    if (isPageLoaded && isTimeLineDataLoaded) {
      const timelinedates = [];
      const timelinedataCases = [];
      const timelinedataDeaths = [];
      const timelinedataRecovered = [];

      Object.keys(countryTimeline.cases).forEach(key => {
        timelinedates.push(key);
        timelinedataCases.push(countryTimeline.cases[key]);
      });

      Object.keys(countryTimeline.deaths).forEach(key => {
        timelinedataDeaths.push(countryTimeline.deaths[key]);
      });

      Object.keys(countryTimeline.recovered).forEach(key => {
        timelinedataRecovered.push(countryTimeline.recovered[key]);
      });

      const cav = document
        .getElementById(`cav_cases_${countryCode}`)
        .getContext('2d');
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
          // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
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
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPageLoaded, isTimeLineDataLoaded]);

  // Mount pie cases
  useEffect(() => {
    if (isPageLoaded && isTimeLineDataLoaded) {
      const timelinedates = [];
      const timelinedata = [];

      Object.keys(countryTimeline).forEach(key => {
        timelinedates.push(key);
        timelinedata.push(countryTimeline[key]);
      });

      const cav = document.getElementById(`pie_cases`).getContext('2d');
      new Chart(cav, {
        type: 'pie',
        options: {
          legend: {
            labels: {
              fontColor: 'white',
            },
          },
        },
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
                country.active,
                country.recovered,
                country.deaths,
              ],
            },
          ],
        },
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPageLoaded, isTimeLineDataLoaded]);

  // Mount pie tests
  useEffect(() => {
    if (isPageLoaded && isTimeLineDataLoaded) {
      const timelinedates = [];
      const timelinedata = [];

      Object.keys(countryTimeline).forEach(key => {
        timelinedates.push(key);
        timelinedata.push(countryTimeline[key]);
      });

      const cav = document.getElementById(`pie_tests`).getContext('2d');
      new Chart(cav, {
        type: 'pie',
        options: {
          legend: {
            labels: {
              fontColor: 'white',
            },
          },
        },
        data: {
          labels: [`${country.country} population`, 'Tests'],
          datasets: [
            {
              backgroundColor: [
                // "#3e95cd",
                '#da8213',
                '#6bfb31',
              ],
              data: [
                // globalData.population,
                country.population,
                country.tests,
              ],
            },
          ],
        },
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPageLoaded, isTimeLineDataLoaded]);

  return !isPageLoaded ? (
    <div className="loading">
      <Loading type="bars" color="#eee" />
    </div>
  ) : (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <CountryData country={country} />
        </div>
        <div className="col-8">
          <section className=" chart-div">
            <h2>Timeline Cases and Deaths</h2>
            <canvas
              className="mt-4"
              height="164px"
              id={`cav_cases_${countryCode}`}
            />
          </section>
        </div>
        <div className="col-4">
          <div className="col-12">
            <section className="chart-div">
              <h2>{country.country} Active, Deaths and Recovered</h2>
              <canvas className="mt-4" id="pie_cases" />
            </section>
          </div>
          <div className="col-12">
            <section className="chart-div">
              <h2>{country.country} Population / Tests</h2>
              <canvas className="mt-4" id="pie_tests" />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
