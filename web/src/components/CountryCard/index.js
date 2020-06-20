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
                    <div className="row align-items-center">
                        <aside className="col-3">
                            <div className="row">
                                <figure className="col my-auto">
                                    <div className="bandeira text-center">
                                        {/* <img src={"https://www.countryflags.io/" + country.code + "/flat/64.png"} alt={"Bandeira " + country.title} /> */}
                                        <img className="bandeira-img" src={"https://cdn.u21.io/flags/4x3/" + (country.iso2).toLowerCase() + ".svg"} alt={"Bandeira " + country.country} />
                                    </div>
                                    <figcaption className="text-bold font-smaller text-center text-white">{country.country}</figcaption>
                                </figure>
                            </div>
                        </aside>
                        <div className="col">
                            <section className="cases">
                                <div>
                                    Cases
                                    <div className="color-cases">{nf.format(country.cases)}</div>
                                </div>
                                <div>
                                    Deaths
                                    <div className="color-death">{nf.format(country.deaths)}</div>
                                </div>
                                <div>
                                    Recovered
                                    <div className="color-recovered">{nf.format(country.recovered)}</div>
                                </div>
                            </section>
                        </div>
                    </div>
                </article>
            </Link>
        </div >
    )
}