import React from 'react';

import GlobalCardStyles from './styles';

export default function GlobalData({ globaldata }) {
  const nf = new Intl.NumberFormat();

  return (
    <GlobalCardStyles>
      <h1 className="title-components">Global Data</h1>
      <article className="global-article">
        <section className="cases">
          <div className="global-data-title top-color-1">
            Cases
            <span className="global-data-numbers color-cases">
              {nf.format(globaldata.cases)}
            </span>
            New cases today
            <span className="global-data-numbers color-new-case">
              {nf.format(globaldata.todayCases)}
            </span>
          </div>
          <div className="global-data-title top-color-2">
            Deaths
            <span className="global-data-numbers color-death">
              {nf.format(globaldata.deaths)}
            </span>
            New deaths today
            <span className="global-data-numbers color-new-death">
              {nf.format(globaldata.todayDeaths)}
            </span>
          </div>
          <div className="global-data-title top-color-3">
            Recovered
            <span className="global-data-numbers color-recovered">
              {nf.format(globaldata.recovered)}
            </span>
            New recoveries today
            <span className="global-data-numbers color-new-recoveries">
              {nf.format(globaldata.todayRecovered)}
            </span>
          </div>
          <div className="global-data-title top-color-4">
            Active cases
            <span className="global-data-numbers color-active">
              {nf.format(globaldata.active)}
            </span>
            Tests
            <span className="global-data-numbers color-tests">
              {nf.format(globaldata.tests)}
            </span>
          </div>
          <div className="global-data-title top-color-5">
            Countries affected
            <span className="global-data-numbers color-affected">
              {nf.format(globaldata.affectedCountries)}
            </span>
            Criticals cases
            <span className="global-data-numbers color-critical">
              {nf.format(globaldata.critical)}
            </span>
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
    </GlobalCardStyles>
  );
}
