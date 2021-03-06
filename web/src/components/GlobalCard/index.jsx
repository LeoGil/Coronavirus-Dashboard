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
        </section>
      </article>
    </GlobalCardStyles>
  );
}
