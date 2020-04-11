import React, { Component } from 'react'
import api from '../../services/api'

import './styles.css'

export default class GlobalData extends Component {
    state = {
        globaldata: [],
    }

    componentDidMount() {
        this.loadGlobalData()
        this.interval = setInterval(() => { this.loadGlobalData() }, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    loadGlobalData = async () => {
        const response = await api.get(`/free-api?global=stats`)
        const { results } = response.data
        console.log('teste')

        this.setState({ globaldata: results[0] })
    }

    render() {
        const { globaldata } = this.state

        return (
            <div className="">
                <article>
                    <p>Total de casos:</p>
                    <p>{globaldata.total_cases}</p>

                    <p>Total de mortes:</p>
                    <p>{globaldata.total_deaths}</p>

                    <p>Total recuperados:</p>
                    <p>{globaldata.total_recovered}</p>

                    <p>Total de casos ativos:</p>
                    <p>{globaldata.total_active_cases}</p>

                    <p>Quantidade de novos casos hoje:</p>
                    <p>{globaldata.total_new_cases_today}</p>

                    <p>Quantidade de mortes hoje:</p>
                    <p>{globaldata.total_new_deaths_today}</p>
                </article>
            </div >

        )
    }
}