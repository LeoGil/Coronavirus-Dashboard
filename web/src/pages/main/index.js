import React, { Component } from 'react'
import api from '../../services/api'
import { NotificationContainer } from 'react-notifications';
//NotificationManager
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


    loadCountryData = async () => {
        const response = await api.get(`/countries`)
        this.setState({ countries: response.data });
    }

    loadGlobalData = async () => {
        const response = await api.get(`/global`);
        this.setState({ globaldata: response.data });
    }

    render() {
        const { countries, globaldata } = this.state;
        console.log('Testando quantas vezes essa porra executa');
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