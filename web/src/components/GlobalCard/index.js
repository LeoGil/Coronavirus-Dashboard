import React from 'react';

import './styles.css';

export default function GlobalData(props) {
    const nf = new Intl.NumberFormat();
    const { globaldata } = props;

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
                <div className="col text-center">{nf.format(globaldata.total_cases)}</div>
                <div className="col text-center">{nf.format(globaldata.total_deaths)}</div>
                <div className="col text-center">{nf.format(globaldata.total_recovered)}</div>
                <div className="col text-center">{nf.format(globaldata.total_active_cases)}</div>
                <div className="col text-center">{nf.format(globaldata.total_new_cases_today)}</div>
                <div className="col text-center">{nf.format(globaldata.total_new_deaths_today)}</div>
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