import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
import rootpath from '../../services/getRootPath';
const nf = new Intl.NumberFormat();

export default function CountryCard({ country }) {
    country.iso2 = (country.country === 'MS Zaandam' ? 'US' : country.iso2)
    country.iso2 = (country.country === 'Diamond Princess' ? 'US' : country.iso2)

    return (
        <div className="col-lg-4">
            <Link to={`${rootpath}${country.iso2}`} className="unstyled-link">
                <article className="pais-article shadow">
                    <figure className="bandeira">
                        <img src={"https://cdn.u21.io/flags/4x3/" + (country.iso2).toLowerCase() + ".svg"} alt={"Bandeira " + country.country} />
                        <figcaption className="text-bold font-smaller text-center text-white">{country.country}</figcaption>
                    </figure>
                    <section className="cases">
                            <div>
                                Cases
                                <span className="color-cases">{nf.format(country.cases)}</span>
                            </div>
                            <div>
                                Deaths
                                <span className="color-death">{nf.format(country.deaths)}</span>
                            </div>
                            <div>
                                Recovered
                                <span className="color-recovered">{nf.format(country.recovered)}</span>
                            </div>
                            <div>
                                Active Cases
                                <span className="color-active">{nf.format(country.active)}</span>
                            </div>
                    </section>
                </article>
            </Link>
        </div >
    )
}