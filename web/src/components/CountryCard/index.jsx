import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import rootpath from '../../services/getRootPath';

const nf = new Intl.NumberFormat();

export default function CountryCard({ country }) {
  country.iso2 = country.country === 'MS Zaandam' ? 'US' : country.iso2;
  country.iso2 = country.country === 'Diamond Princess' ? 'US' : country.iso2;

  const active_pct = Math.round((country.active * 100) / country.cases);
  const recovered_pct = Math.round((country.recovered * 100) / country.cases);
  const death_pct = Math.ceil((country.deaths * 100) / country.cases);

  return (
    <div className="col-xl-3 col-lg-4">
      <Link to={`${rootpath}${country.iso2}`} className="unstyled-link">
        <article className="pais-article">
          <figure className="flag">
            <img
              src={`https://cdn.u21.io/flags/4x3/${country.iso2.toLowerCase()}.svg`}
              alt={`flag ${country.country}`}
            />
            <figcaption className="text-bold font-smaller text-center">
              {country.country}
            </figcaption>
          </figure>
          <div className="progress shadow" style={{ height: '7px' }}>
            <div
              className="progress-bar bg-active"
              role="progressbar"
              style={{ width: `${active_pct}%` }}
              aria-valuenow={active_pct}
              aria-valuemin="0"
              aria-valuemax="100"
            />
            <div
              className="progress-bar bg-recovered"
              role="progressbar"
              style={{ width: `${recovered_pct}%` }}
              aria-valuenow={recovered_pct}
              aria-valuemin="0"
              aria-valuemax="100"
            />
            <div
              className="progress-bar bg-death"
              role="progressbar"
              style={{ width: `${death_pct}%` }}
              aria-valuenow={death_pct}
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
          <section className="cases">
            <div>
              Cases
              <span className="color-cases">{nf.format(country.cases)}</span>
              {country.todayCases > 0 && (
                <span className="color-cases new-today">
                  + {nf.format(country.todayCases)}
                </span>
              )}
            </div>
            <div>
              Deaths
              <span className="color-death">{nf.format(country.deaths)}</span>
              {country.todayDeaths > 0 && (
                <span className="color-death new-today">
                  + {nf.format(country.todayDeaths)}
                </span>
              )}
            </div>
            <div>
              Recovered
              <span className="color-recovered">
                {nf.format(country.recovered)}
              </span>
              {country.todayRecovered > 0 && (
                <span className="color-recovered new-today">
                  + {nf.format(country.todayRecovered)}
                </span>
              )}
            </div>
            <div>
              Active Cases
              <span className="color-active">{nf.format(country.active)}</span>
            </div>
          </section>
        </article>
      </Link>
    </div>
  );
}
