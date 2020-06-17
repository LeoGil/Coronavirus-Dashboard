import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import api from '../../services/api';
import Loading from 'react-loading';
import * as chart from 'chart.js'

import './style.css'

export default function Country() {
    const { country_code } = useParams();
    const [isPageLoaded, setIsPageLoaded] = useState(false);
    const [country, setCountry] = useState([]);
    const [countryTimeline, setCountryTimeline] = useState([]);

    const nf = new Intl.NumberFormat();
    //Get Country Timeline
    useEffect(() => {
        api.get(`/country_timeline/${country_code}`).then(response => {
            setCountryTimeline(response.data[0]);
            setIsPageLoaded(true);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //Get Country Data
    useEffect(() => {
        api.get(`/country/${country_code}`).then(response => {
            setCountry(response.data);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //Mount graph cases
    useEffect(() => {
        if (isPageLoaded) {
            let timelinedates = [];
            let timelinedata = [];

            Object.keys(countryTimeline).forEach(key => {
                timelinedates.push(key);
                timelinedata.push(countryTimeline[key]);
            })

            let cav = document.getElementById(`cav_cases_${country_code}`).getContext('2d');
            new chart(cav, {
                type: 'line',
                options: {
                    tooltips: {
                        mode: 'index',
                        intersect: false,
                    }
                },
                data: {
                    labels: timelinedates,
                    //labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [
                        {
                            label: 'Cases',
                            fill: true,
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
                            data: timelinedata.map(item => (
                                item.total_cases
                            ))
                        },
                        {
                            label: 'Deaths',
                            fill: true,
                            lineTension: 0.1,
                            backgroundColor: 'rgba(243, 83, 83,1)',
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
                            pointHoverBorderColor: '#f35353',
                            pointHoverBorderWidth: 2,
                            pointRadius: 2,
                            pointHitRadius: 5,
                            data: timelinedata.map(item => (
                                item.total_deaths
                            )),
                        }
                    ]
                },
            });

        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPageLoaded]);

    //Mount graph now
    useEffect(() => {
        if (isPageLoaded) {
            let timelinedates = [];
            let timelinedata = [];

            Object.keys(countryTimeline).forEach(key => {
                timelinedates.push(key);
                timelinedata.push(countryTimeline[key]);
            })

            let cav = document.getElementById(`cav_now_${country_code}`).getContext('2d');
            new chart(cav, {
                type: 'line',
                options: {
                    tooltips: {
                        mode: 'index',
                        intersect: false,
                    }
                },
                data: {
                    labels: timelinedates,
                    //labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [
                        {
                            label: 'Cases',
                            fill: true,
                            lineTension: 0.1,
                            backgroundColor: 'rgba(255, 138, 55,0.4)',
                            borderColor: '#ff8a37',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: '#ff8a37',
                            pointBackgroundColor: '#ff8a37',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: '#ff8a37',
                            pointHoverBorderColor: '#ff8a37',
                            pointHoverBorderWidth: 2,
                            pointRadius: 2,
                            pointHitRadius: 5,
                            data: timelinedata.map(item => (
                                item.new_daily_cases
                            ))
                        },
                        {
                            label: 'Deaths',
                            fill: true,
                            lineTension: 0.1,
                            backgroundColor: 'rgba(175, 28, 28,1)',
                            borderColor: '#af1c1c',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: '#af1c1c',
                            pointBackgroundColor: '#af1c1c',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: '#af1c1c',
                            pointHoverBorderColor: '#af1c1c',
                            pointHoverBorderWidth: 2,
                            pointRadius: 2,
                            pointHitRadius: 5,
                            data: timelinedata.map(item => (
                                item.new_daily_deaths
                            )),
                        }
                    ]
                },
            });

        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPageLoaded]);

    const active = (country.total_cases - country.total_deaths - country.total_recovered)

    return isPageLoaded === false
        ? (
            <div className="d-flex vh-100 justify-content-center align-items-center">
                <Loading type={"bars"} color={"#eee"} />
            </div>
        )
        : (
            <div className="container-fluid">
                {console.log(country)}
                <div className="row text-white">
                    <div className="col-12">
                        <img className="float-left bandeira-img" src={"https://cdn.u21.io/flags/4x3/" + (country_code).toLowerCase() + ".svg"} alt={"Bandeira " + country.title} />
                        <h2 className="float-left ml-4 mt-2">{country.title}</h2>
                        <article className="float-left global-article shadow">

                            <div className="row">
                                <div className="col font-weight-bold text-center global-data-title text-light">Cases</div>
                                <div className="col font-weight-bold text-center global-data-title text-light">Deaths</div>
                                <div className="col font-weight-bold text-center global-data-title text-light">Recovered</div>
                                <div className="col font-weight-bold text-center global-data-title text-light">Active cases</div>
                                <div className="col font-weight-bold text-center global-data-title text-light">New cases today</div>
                                <div className="col font-weight-bold text-center global-data-title text-light">New deaths today</div>
                                <div className="w-100"></div>
                                <div className="col text-center global-data-numbers color-cases">{nf.format(country.total_cases)}</div>
                                <div className="col text-center global-data-numbers color-death">{nf.format(country.total_deaths)}</div>
                                <div className="col text-center global-data-numbers color-recovered">{nf.format(country.total_recovered)}</div>
                                <div className="col text-center global-data-numbers color-active">{nf.format(active)}</div>
                                <div className="col text-center global-data-numbers color-new-case">{nf.format(country.total_new_cases_today)}</div>
                                <div className="col text-center global-data-numbers color-new-death">{nf.format(country.total_new_deaths_today)}</div>
                            </div>
                        </article>
                    </div>
                    <div className="col-6">
                        <section className="chart-div">
                            <h2>Timeline Cases and Deaths</h2>
                            <canvas className="mt-4" id={`cav_cases_${country_code}`} ></canvas>
                        </section>
                    </div>
                    <div className="col-6">
                        <section className="chart-div">
                            <h2>Timeline New Cases and Deaths</h2>
                            <canvas className="mt-4" id={`cav_now_${country_code}`} ></canvas>
                        </section>
                    </div>
                </div>
            </div >
        )
}