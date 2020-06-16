import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
import rootpath from '../../services/getRootPath';

export default function CountryCard(props) {
    const nf = new Intl.NumberFormat();
    let { country } = props;

    country.code = (country.code === 'DP' ? 'JP' : country.code);

    return (
        <div className="col-lg-4">
            <Link to={`${rootpath}${country.code}`} className="unstyled-link">
                <article className="pais-article shadow">
                    <div className="row justify-content-center">
                        <div className="col-3">
                            <div className="row">
                                <div className="col my-auto">
                                    <div className="bandeira text-center">
                                        {/* <img src={"https://www.countryflags.io/" + country.code + "/flat/64.png"} alt={"Bandeira " + country.title} /> */}
                                        <img className="bandeira-img" src={"https://cdn.u21.io/flags/4x3/" + (country.code).toLowerCase() + ".svg"} alt={"Bandeira " + country.title} />
                                    </div>
                                    <div className="font-weight-bold text-center text-light">{country.title}</div>
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
                                <div className="col text-center color-cases">{nf.format(country.total_cases)}</div>
                                <div className="col text-center color-death">{nf.format(country.total_deaths)}</div>
                                <div className="col text-center color-recovered">{nf.format(country.total_recovered)}</div>
                            </div>
                        </div>
                    </div>
                </article>
            </Link>
        </div >
    )
}