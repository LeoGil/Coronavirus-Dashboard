import React, { Component } from 'react'
import api from '../../services/api'
//import { Link } from 'react-router-dom'

import GlobalData from '../../components/Global'

import './styles.css'

export default class Main extends Component {
    state = {
        products: [],
    }

    componentDidMount() {
        this.loadProducts()
        //this.interval = setInterval(() => { this.loadProducts(true) }, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    // compareObjects = (contryReturn = null) => {


    //     if (contryReturn != null) {
    //         var countryChecker = this.state.products
    //         var countryReturnTest = contryReturn

    //         function comparer(otherArray) {
    //             return function (current) {
    //                 return otherArray.filter(function (other) {
    //                     return other.total_cases == current.total_cases &&
    //                         other.total_recovered == current.total_recovered &&
    //                         other.total_deaths == current.total_deaths
    //                 }).length == 0;
    //             }
    //         }

    //         var onlyInA = countryChecker.filter(comparer(countryReturnTest));
    //         var onlyInB = countryReturnTest.filter(comparer(countryChecker));

    //         var result = onlyInA.concat(onlyInB);

    //         console.log(result);
    //     }
    // }


    loadProducts = async (verificar) => {
        const response = await api.get(`/free-api?countryTotals=ALL`)
        const { countryitems } = response.data

        function compare(a, b) {
            const totalCasesA = a.total_cases
            const totalCasesB = b.total_cases

            let comparison = 0;
            if (totalCasesA < totalCasesB) {
                comparison = 1;
            } else if (totalCasesA > totalCasesB) {
                comparison = -1;
            }
            return comparison;
        }

        countryitems[0][83] = {
            "ourid": 1,
            "title": "Afghanistan",
            "code": "AF",
            "source": "https://thevirustracker.com/afghanistan-coronavirus-information-af",
            "total_cases": 600,
            "total_recovered": 32,
            "total_unresolved": 0,
            "total_deaths": 18,
            "total_new_cases_today": 34,
            "total_new_deaths_today": 3,
            "total_active_cases": 505,
            "total_serious_cases": 0
        }

        function compareObjects() {
            var countryChecker = this.state.products
            var countryReturnTest = Object.values(countryitems[0]).sort(compare)

            function comparer(otherArray) {
                return function (current) {
                    return otherArray.filter(function (other) {
                        return other.total_cases === current.total_cases &&
                            other.total_recovered === current.total_recovered &&
                            other.total_deaths === current.total_deaths
                    }).length === 0;
                }
            }

            var onlyInA = countryChecker.filter(comparer(countryReturnTest));
            var onlyInB = countryReturnTest.filter(comparer(countryChecker));

            var result = onlyInA.concat(onlyInB);

            console.log(result);
        }

        if (verificar === true) {
            compareObjects()
        }


        this.setState({ products: Object.values(countryitems[0]).sort(compare) })
    }

    render() {
        const { products } = this.state

        return (
            <div className="container-fluid">
                <div className="container">
                    <GlobalData />
                </div>
                <div className="row justify-content-md-center">
                    {products.map(product => (
                        <div className="col-lg-4">
                            <article className="pais-article shadow" key={product.ourid}>
                                <div className="row justify-content-center">
                                    <div className="col-2">
                                        <div className="row">
                                            <div className="col my-auto">
                                                <img className="bandeira" src={"https://www.countryflags.io/" + product.code + "/flat/64.png"} alt={"Bandeira " + product.title} />
                                                <div className="font-weight-bold text-center">{product.title}</div>
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
                                            <div className="col text-center">{product.total_cases}</div>
                                            <div className="col text-center">{product.total_deaths}</div>
                                            <div className="col text-center">{product.total_recovered}</div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div >
                    ))
                    }
                </div >
            </div >
        )
    }
}