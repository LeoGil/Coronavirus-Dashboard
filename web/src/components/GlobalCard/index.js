import React from 'react';

import './styles.css';

export default function GlobalData(props) {
    const nf = new Intl.NumberFormat();
    const { globaldata } = props;

    const active = (globaldata.total_cases - globaldata.total_deaths - globaldata.total_recovered)
    return (
        <div>
            <p className="text-center text-white title-components">Global Data</p>
            <article className="global-article shadow">

                <div className="row">
                    <div className="col font-weight-bold text-center global-data-title text-light">Cases</div>
                    <div className="col font-weight-bold text-center global-data-title text-light">Deaths</div>
                    <div className="col font-weight-bold text-center global-data-title text-light">Recovered</div>
                    <div className="col font-weight-bold text-center global-data-title text-light">Active cases</div>
                    <div className="col font-weight-bold text-center global-data-title text-light">New cases today</div>
                    <div className="col font-weight-bold text-center global-data-title text-light">New deaths today</div>
                    <div className="w-100"></div>
                    <div className="col text-center global-data-numbers color-cases">{nf.format(globaldata.total_cases)}</div>
                    <div className="col text-center global-data-numbers color-death">{nf.format(globaldata.total_deaths)}</div>
                    <div className="col text-center global-data-numbers color-recovered">{nf.format(globaldata.total_recovered)}</div>
                    <div className="col text-center global-data-numbers color-active">{nf.format(active)}</div>
                    <div className="col text-center global-data-numbers color-new-case">{nf.format(globaldata.total_new_cases_today)}</div>
                    <div className="col text-center global-data-numbers color-new-death">{nf.format(globaldata.total_new_deaths_today)}</div>
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
        </div>
    )
}