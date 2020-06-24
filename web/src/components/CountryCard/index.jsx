import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import rootpath from '../../services/getRootPath';

const nf = new Intl.NumberFormat();

export default function CountryCard({ country }) {
  country.iso2 = country.country === 'MS Zaandam' ? 'US' : country.iso2;
  country.iso2 = country.country === 'Diamond Princess' ? 'US' : country.iso2;

  return (
    <div className="col-lg-3">
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
          {/* <div className="progress" style={{ height: "4px" }}>
            <div className="progress-bar" role="progressbar" style={{ width: "15%" }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
            <div className="progress-bar bg-success" role="progressbar" style={{ width: "30%" }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
            <div className="progress-bar bg-info" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
          </div> */}
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
