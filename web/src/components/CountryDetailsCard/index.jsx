import React from 'react';
import './styles.css';

const nf = new Intl.NumberFormat();

export default function CountryDetailsCard({ country }) {
  country.iso2 = country.country === 'MS Zaandam' ? 'US' : country.iso2;
  country.iso2 = country.country === 'Diamond Princess' ? 'US' : country.iso2;

  return (
    <article className="pais-details-article">
      <figure className="bandeira">
        <img
          src={`https://cdn.u21.io/flags/4x3/${country.iso2.toLowerCase()}.svg`}
          alt={`Bandeira ${country.country}`}
        />
        <figcaption>{country.country}</figcaption>
      </figure>
      <section className="cases">
        <div>
          Cases
          <span className="country-data-numbers color-cases">
            {nf.format(country.cases)}
          </span>
          New Cases Today
          <span className="country-data-numbers color-new-case">
            {nf.format(country.todayCases)}
          </span>
        </div>
        <div>
          Deaths
          <span className="country-data-numbers color-death">
            {nf.format(country.deaths)}
          </span>
          New Deaths Today
          <span className="country-data-numbers color-new-death">
            {nf.format(country.todayDeaths)}
          </span>
        </div>
        <div>
          Recovered
          <span className="country-data-numbers color-recovered">
            {nf.format(country.recovered)}
          </span>
          New Recovered Today
          <span className="country-data-numbers color-new-recoveries">
            {nf.format(country.todayRecovered)}
          </span>
        </div>
        <div>
          Active Cases
          <span className="country-data-numbers color-active">
            {nf.format(country.active)}
          </span>
          Tests
          <span className="country-data-numbers color-tests">
            {nf.format(country.tests)}
          </span>
        </div>
        <div>
          Population
          <span className="country-data-numbers color-affected">
            {nf.format(country.population)}
          </span>
          Critical
          <span className="country-data-numbers color-critical">
            {nf.format(country.critical)}
          </span>
        </div>
      </section>
    </article>
  );
}
