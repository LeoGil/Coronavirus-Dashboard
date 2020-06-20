import React from 'react';

import './styles.css';

export default function GlobalData({ globaldata }) {
    const nf = new Intl.NumberFormat();

    return (
        <>
            <h1 className="text-center text-white title-components">Global Data</h1>
            <article className="global-article shadow">
                <section className="cases">
                    <div className="global-data-title">
                        Cases
                        <span className="global-data-numbers color-cases">{nf.format(globaldata.cases)}</span>
                        New cases today
                        <span className="global-data-numbers color-new-case">{nf.format(globaldata.todayCases)}</span>
                    </div>
                    <div className="global-data-title">
                        Deaths
                        <span className="global-data-numbers color-death">{nf.format(globaldata.deaths)}</span>
                        New deaths today
                        <span className="global-data-numbers color-new-death">{nf.format(globaldata.todayDeaths)}</span>
                    </div>
                    <div className="global-data-title">
                        Recovered
                        <span className="global-data-numbers color-recovered">{nf.format(globaldata.recovered)}</span>
                        New recoveries today
                        <span className="global-data-numbers color-new-recoveries">{nf.format(globaldata.todayRecovered)}</span>
                    </div>
                    <div className="global-data-title">
                        Active cases
                        <span className="global-data-numbers color-active">{nf.format(globaldata.active)}</span>
                        Tests
                        <span className="global-data-numbers color-tests">{nf.format(globaldata.tests)}</span>
                    </div>
                    <div className="global-data-title">
                        Countries affected
                        <span className="global-data-numbers color-affected">{nf.format(globaldata.affectedCountries)}</span>
                        Criticals
                        <span className="global-data-numbers color-critical">{nf.format(globaldata.critical)}</span>
                    </div>
                </section>
                {/* <section>
                    <button className='btn btn-info' onClick={this.createNotification('info')}>Info</button>
                    <hr />
                    <button className='btn btn-success' onClick={this.createNotification('success')}>Success</button>
                    <hr />
                    <button className='btn btn-warning' onClick={this.createNotification('warning')}>Warning</button>
                    <hr />
                    <button className='btn btn-danger' onClick={this.createNotification('error')}>Error</button>
                </section> */}
            </article>
        </>
    )
}