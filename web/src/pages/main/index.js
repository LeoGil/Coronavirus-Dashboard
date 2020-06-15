import React, { Component } from 'react'
import api from '../../services/api'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import GlobalData from '../../components/Global'
import CountryCard from '../../components/CountryCard'

export default class Main extends Component {
    state = {
        countries: [],
        globaldata: [],
    }

    componentDidMount() {
        this.loadCountryData()
        this.loadGlobalData()
        this.interval = setInterval(() => { this.loadCountryData(true, this.state.data); this.loadGlobalData() }, 10000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    loadCountryData = async (executa, stateAtual) => {
        const response = await api.get(`/countries`)
        const countryitems = response.data


        this.setState({ countries: countryitems });
    }

    loadGlobalData = async () => {
        const response = await api.get(`/free-api?global=stats`);
        const { results } = response.data;


        this.setState({ globaldata: results[0] });
    }

    render() {
        const { countries, globaldata } = this.state;
        console.log(countries)

        return (
            <div className="container-fluid">
                <NotificationContainer />
                <div className="container">
                    <GlobalData globaldata={globaldata} />
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
}