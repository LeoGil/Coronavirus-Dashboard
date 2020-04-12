import React, { Component } from 'react'
import api from '../../services/api'


import './styles.css'

export default class GlobalData extends Component {
    state = {
        globaldata: [],
    }

    componentDidMount() {
        this.loadGlobalData(0)
        this.interval = setInterval(() => { this.loadGlobalData() }, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    loadGlobalData = async () => {
        const response = await api.get(`/free-api?global=stats`)
        const { results } = response.data


        this.setState({ globaldata: results[0] })
    }



    render() {
        const { globaldata } = this.state

        return (
            <article className="global-article shadow">
                <div className="row">
                    <div className="col font-weight-bold text-center">Casos</div>
                    <div className="col font-weight-bold text-center">Mortes</div>
                    <div className="col font-weight-bold text-center">Recuperados</div>
                    <div className="col font-weight-bold text-center">Casos ativos</div>
                    <div className="col font-weight-bold text-center">Novos casos hoje</div>
                    <div className="col font-weight-bold text-center">Mortes hoje</div>
                    <div className="w-100"></div>
                    <div className="col font-weight-bold text-center">{globaldata.total_cases}</div>
                    <div className="col text-center">{globaldata.total_deaths}</div>
                    <div className="col text-center">{globaldata.total_recovered}</div>
                    <div className="col text-center">{globaldata.total_active_cases}</div>
                    <div className="col text-center">{globaldata.total_new_cases_today}</div>
                    <div className="col text-center">{globaldata.total_new_deaths_today}</div>
                </div>
                <div>
                    {/* <button className='btn btn-info' onClick={this.createNotification('info')}>Info</button>
                    <hr />
                    <button className='btn btn-success' onClick={this.createNotification('success')}>Success</button>
                    <hr />
                    <button className='btn btn-warning' onClick={this.createNotification('warning')}>Warning</button>
                    <hr />
                    <button className='btn btn-danger' onClick={this.createNotification('error')}>Error</button> */}
                </div>
            </article>

        )
    }
}