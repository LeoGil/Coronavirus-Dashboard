import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import api from '../../services/api';
import Loading from 'react-loading';
import * as chart from 'chart.js'

import './style.css'

export default function Country() {
    const { country_code } = useParams();
    const [isPageLoaded, setIsPageLoaded] = useState(false);
    const [isTimeLineDataLoaded, setIsTimeLineDataLoaded] = useState(false);
    const [country, setCountry] = useState([]);
    const [countryTimeline, setCountryTimeline] = useState([]);

    const nf = new Intl.NumberFormat();
    //Get Country Timeline
    useEffect(() => {
        const loadCountryTimeLine = async () => {
            const response = await api.get(`/country_timeline/${country_code}`);
            setCountryTimeline(response.data.timeline);
            setIsTimeLineDataLoaded(true);
        }

        loadCountryTimeLine()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //Get Country Data
    useEffect(() => {
        const loadCountryData = async () => {
            const response = await api.get(`/country/${country_code}`);
            setCountry(response.data);
            setIsPageLoaded(true);
        }

        loadCountryData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //Mount graph cases
    useEffect(() => {
        if (isPageLoaded && isTimeLineDataLoaded) {
            let timelinedates = [];
            let timelinedataCases = [];
            let timelinedataDeaths = [];
            let timelinedataRecovered = [];
            console.log(countryTimeline)

            Object.keys(countryTimeline.cases).forEach(key => {
                timelinedates.push(key);
                timelinedataCases.push(countryTimeline.cases[key])
            })

            Object.keys(countryTimeline.deaths).forEach(key => {
                timelinedataDeaths.push(countryTimeline.deaths[key])
            })

            Object.keys(countryTimeline.recovered).forEach(key => {
                timelinedataRecovered.push(countryTimeline.recovered[key])
            })

            let cav = document.getElementById(`cav_cases_${country_code}`).getContext('2d');
            new chart(cav, {
                type: 'line',
                options: {
                    tooltips: {
                        mode: 'index',
                        intersect: false,
                    },
                    legend: {
                        labels: {
                            fontColor: 'white'
                        }
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                fontColor: 'white'
                            },
                        }],
                        xAxes: [{
                            ticks: {
                                fontColor: 'white'
                            },
                        }]
                    },
                },
                data: {
                    labels: timelinedates,
                    //labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
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
                            data: timelinedataCases.map(item => (
                                item
                            ))
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
                            data: timelinedataRecovered.map(item => (
                                item
                            )),
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
                            data: timelinedataDeaths.map(item => (
                                item
                            )),
                        }
                    ]
                },
            });

        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPageLoaded, isTimeLineDataLoaded]);

    //Mount pie cases
    useEffect(() => {
        if (isPageLoaded && isTimeLineDataLoaded) {
            let timelinedates = [];
            let timelinedata = [];

            Object.keys(countryTimeline).forEach(key => {
                timelinedates.push(key);
                timelinedata.push(countryTimeline[key]);
            })

            let cav = document.getElementById(`pie_cases`).getContext('2d');
            new chart(cav, {
                type: 'pie',
                options: {
                    legend: {
                        labels: {
                            fontColor: 'white'
                        }
                    },
                },
                data: {
                    labels: [
                        // "World Population",
                        "Active",
                        "Recovered",
                        "Death"
                    ],
                    datasets: [{
                        backgroundColor: [
                            // "#3e95cd",
                            "#ffc137",
                            "#347fd5",
                            "#f35353",
                        ],
                        data: [
                            //globalData.population,
                            country.active,
                            country.recovered,
                            country.deaths
                        ]
                    }]
                },
            });

        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPageLoaded, isTimeLineDataLoaded]);

    //Mount pie tests
    useEffect(() => {
        if (isPageLoaded && isTimeLineDataLoaded) {
            let timelinedates = [];
            let timelinedata = [];

            Object.keys(countryTimeline).forEach(key => {
                timelinedates.push(key);
                timelinedata.push(countryTimeline[key]);
            })


            let cav = document.getElementById(`pie_tests`).getContext('2d');
            const teste = new chart(cav, {
                type: 'pie',
                options: {
                    legend: {
                        labels: {
                            fontColor: 'white'
                        }
                    },
                },
                data: {
                    labels: [
                        `${country.country} population`,
                        "Tests",
                    ],
                    datasets: [{
                        backgroundColor: [
                            // "#3e95cd",
                            "#da8213",
                            "#6bfb31",
                        ],
                        data: [
                            //globalData.population,
                            country.population,
                            country.tests
                        ]
                    }]
                },
            });
            console.log(teste)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPageLoaded, isTimeLineDataLoaded]);

    return isPageLoaded === false
        ? (
            <div className="loading">
                <Loading type={"bars"} color={"#eee"} />
            </div>
        )
        : (
            <div className="container-fluid">
                <div className="row text-white">
                    <div className="col-12">
                        <img className="float-left bandeira-img" src={"https://cdn.u21.io/flags/4x3/" + (country_code).toLowerCase() + ".svg"} alt={"Bandeira " + country.country} />
                        <h2 className="float-left ml-4 mt-2">{country.country}</h2>
                        <article className="float-left global-article shadow">

                            <div className="row">
                                <div className="col font-weight-bold text-center global-data-title text-light">Cases</div>
                                <div className="col font-weight-bold text-center global-data-title text-light">Deaths</div>
                                <div className="col font-weight-bold text-center global-data-title text-light">Recovered</div>
                                <div className="col font-weight-bold text-center global-data-title text-light">Active cases</div>
                                <div className="col font-weight-bold text-center global-data-title text-light">Population</div>
                                <div className="w-100"></div>
                                <div className="col text-center global-data-numbers color-cases">{nf.format(country.cases)}</div>
                                <div className="col text-center global-data-numbers color-death">{nf.format(country.deaths)}</div>
                                <div className="col text-center global-data-numbers color-recovered">{nf.format(country.recovered)}</div>
                                <div className="col text-center global-data-numbers color-active">{nf.format(country.active)}</div>
                                <div className="col text-center global-data-numbers color-affected">{nf.format(country.population)}</div>

                            </div>
                            <div className="row mt-3">
                                <div className="col font-weight-bold text-center global-data-title text-light">New cases today</div>
                                <div className="col font-weight-bold text-center global-data-title text-light">New deaths today</div>
                                <div className="col font-weight-bold text-center global-data-title text-light">New recoveries today</div>
                                <div className="col font-weight-bold text-center global-data-title text-light">Tests</div>
                                <div className="col font-weight-bold text-center global-data-title text-light">Criticals</div>
                                <div className="w-100"></div>
                                <div className="col text-center global-data-numbers color-new-case">{nf.format(country.todayCases)}</div>
                                <div className="col text-center global-data-numbers color-new-death">{nf.format(country.todayDeaths)}</div>
                                <div className="col text-center global-data-numbers color-new-recoveries">{nf.format(country.todayRecovered)}</div>
                                <div className="col text-center global-data-numbers color-tests">{nf.format(country.tests)}</div>
                                <div className="col text-center global-data-numbers color-critical">{nf.format(country.critical)}</div>

                            </div>
                        </article>
                    </div>
                    <div className="col-8">
                        <section className=" chart-div">
                            <h2>Timeline Cases and Deaths</h2>
                            <canvas className="mt-4" height='164px' id={`cav_cases_${country_code}`} ></canvas>
                        </section>
                    </div>
                    <div className="col-4">
                        <div className="col-12">
                            <section className="chart-div">
                                <h2>{country.country} Active, Deaths and Recovered</h2>
                                <canvas className="mt-4" id='pie_cases' ></canvas>
                            </section>
                        </div>
                        <div className="col-12">
                            <section className="chart-div">
                                <h2>{country.country} Population / Tests</h2>
                                <canvas className="mt-4" id="pie_tests" ></canvas>
                            </section>
                        </div>
                    </div>
                </div>
            </div >
        )
}