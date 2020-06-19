import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
import rootpath from '../../services/getRootPath';

export default function CountryCard({ country }) {
    const nf = new Intl.NumberFormat();

    country.iso2 = (country.country === 'MS Zaandam' ? 'US' : country.iso2)
    country.iso2 = (country.country === 'Diamond Princess' ? 'US' : country.iso2)
    // country.iso2 = (country.iso2 === 'DP' ? 'JP' : country.iso2);

    return (
        <div className="col-lg-4">
            <Link to={`${rootpath}${country.iso2}`} className="unstyled-link">
                <article className="pais-article shadow">
                    <div className="row justify-content-center">
                        <div className="col-3">
                            <div className="row">
                                <div className="col my-auto">
                                    <div className="bandeira text-center">
                                        {/* <img src={"https://www.countryflags.io/" + country.code + "/flat/64.png"} alt={"Bandeira " + country.title} /> */}
                                        <img className="bandeira-img" src={"https://cdn.u21.io/flags/4x3/" + (country.iso2).toLowerCase() + ".svg"} alt={"Bandeira " + country.country} />
                                    </div>
                                    <div className="font-weight-bold text-center text-light">{country.country}</div>
                                </div>
                            </div>
                        </div>
                        <div className="col my-auto">
                            <div className="row text-light">
                                {/* <div className="col font-weight-bold text-center">Pais</div> */}
                                <div className="col font-weight-bold text-center">Cases</div>
                                <div className="col font-weight-bold text-center">Deaths</div>
                                <div className="col font-weight-bold text-center">Recovered</div>
                            </div>
                            <div className="row">
                                <div className="col text-center color-cases">{nf.format(country.cases)}</div>
                                <div className="col text-center color-death">{nf.format(country.deaths)}</div>
                                <div className="col text-center color-recovered">{nf.format(country.recovered)}</div>
                            </div>
                        </div>
                    </div>
                </article>
            </Link>
        </div >
    )
}