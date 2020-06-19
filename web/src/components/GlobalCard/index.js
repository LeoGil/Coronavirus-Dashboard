import React from 'react';

import './styles.css';

export default function GlobalData({globaldata}) {
    const nf = new Intl.NumberFormat();

    return (
        <div>
            <p className="text-center text-white title-components">Global Data</p>
            <article className="global-article shadow">

                <div className="row">
                    <div className="col font-weight-bold text-center global-data-title text-light">Cases</div>
                    <div className="col font-weight-bold text-center global-data-title text-light">Deaths</div>
                    <div className="col font-weight-bold text-center global-data-title text-light">Recovered</div>
                    <div className="col font-weight-bold text-center global-data-title text-light">Active cases</div>
                    <div className="col font-weight-bold text-center global-data-title text-light">Countries affected</div>
                    <div className="w-100"></div>
                    <div className="col text-center global-data-numbers color-cases">{nf.format(globaldata.cases)}</div>
                    <div className="col text-center global-data-numbers color-death">{nf.format(globaldata.deaths)}</div>
                    <div className="col text-center global-data-numbers color-recovered">{nf.format(globaldata.recovered)}</div>
                    <div className="col text-center global-data-numbers color-active">{nf.format(globaldata.active)}</div>
                    <div className="col text-center global-data-numbers color-affected">{nf.format(globaldata.affectedCountries)}</div>

                </div>
                <div className="row mt-3">
                    <div className="col font-weight-bold text-center global-data-title text-light">New cases today</div>
                    <div className="col font-weight-bold text-center global-data-title text-light">New deaths today</div>
                    <div className="col font-weight-bold text-center global-data-title text-light">New recoveries today</div>
                    <div className="col font-weight-bold text-center global-data-title text-light">Tests</div>
                    <div className="col font-weight-bold text-center global-data-title text-light">Criticals</div>
                    <div className="w-100"></div>
                    <div className="col text-center global-data-numbers color-new-case">{nf.format(globaldata.todayCases)}</div>
                    <div className="col text-center global-data-numbers color-new-death">{nf.format(globaldata.todayDeaths)}</div>
                    <div className="col text-center global-data-numbers color-new-recoveries">{nf.format(globaldata.todayRecovered)}</div>
                    <div className="col text-center global-data-numbers color-tests">{nf.format(globaldata.tests)}</div>
                    <div className="col text-center global-data-numbers color-critical">{nf.format(globaldata.critical)}</div>

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