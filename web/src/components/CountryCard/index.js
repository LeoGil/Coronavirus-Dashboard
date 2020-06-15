import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

export default function CountryCard(props) {
    const nf = new Intl.NumberFormat();
    let { country } = props;

    country.code = (country.code === 'DP' ? 'JP' : country.code);

    return (
        <div className="col-lg-4">
            <Link to={`/Coronavirus-Dashboard/${country.code}`} className="unstyled-link">
                <article className="pais-article shadow">
                    <div className="row justify-content-center">
                        <div className="col-3">
                            <div className="row">
                                <div className="col my-auto">
                                    <div className="bandeira text-center">
                                        <img src={"https://www.countryflags.io/" + country.code + "/flat/64.png"} alt={"Bandeira " + country.title} />
                                    </div>
                                    <div className="font-weight-bold text-center">{country.title}</div>
                                </div>
                            </div>
                        </div>
                        <div className="col my-auto">
                            <div className="row">
                                {/* <div className="col font-weight-bold text-center">Pais</div> */}
                                <div className="col font-weight-bold text-center">Casos</div>
                                <div className="col font-weight-bold text-center">Mortes</div>
                                <div className="col font-weight-bold text-center">Recuperados</div>
                            </div>
                            <div className="row">
                                <div className="col text-center">{nf.format(country.total_cases)}</div>
                                <div className="col text-center">{nf.format(country.total_deaths)}</div>
                                <div className="col text-center">{nf.format(country.total_recovered)}</div>
                            </div>
                        </div>
                    </div>
                </article>
            </Link>
        </div >
    )
}