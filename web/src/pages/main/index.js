import React, { Component } from 'react'
import api from '../../services/api'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import '../../../node_modules/react-notifications/lib/notifications.css';
//import { Link } from 'react-router-dom'

import GlobalData from '../../components/Global'

import './styles.css'

export default class Main extends Component {
    state = {
        products: [],
    }

    componentDidMount() {
        this.loadProducts()
        this.interval = setInterval(() => { this.loadProducts(true, this.state.products) }, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    loadProducts = async (verificar, stateAtual) => {
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

        // this.createNotification('warning')
        // NotificationManager.warning('Warning message', 'Close after 3000ms', 0);

        function compareObjects(stateAtual) {
            var countryChecker = stateAtual
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

            function createNotification(type, code, body = null) {
                switch (type) {
                    case 'info':
                        NotificationManager.info('Atualizado global', null, 1000);
                        break;
                    case 'success':
                        NotificationManager.success('Success message', 'Title here', 1000);
                        break;
                    case 'warning':
                        NotificationManager.warning('te', "<img src='https://www.countryflags.io/" + code + "/flat/64.png' />", 0);
                        break;
                    default:
                        NotificationManager.error('Error message', 'Click me!', 0, () => {
                            alert('callback');
                        });
                        break;
                }
            };

            // console.log(countryChecker[1].total_cases)
            // createNotification('warning', countryChecker[1].code)
            console.log(result)

            // OUTRO MODO DE FAZER
            // const result1 = countryChecker.filter(
            //     ({ value: value1, display: display1 }) => !countryReturnTest.some(({ value: value2, display: display2 }) => value2 === value1 && display2 === display1)
            // ); 

            // const result2 = countryReturnTest.filter(
            //     ({ value: value1, display: display1 }) => !countryChecker.some(({ value: value2, display: display2 }) => value2 === value1 && display2 === display1)
            // );

            // var results = result1.concat(result2);
            // console.log(results);

        }

        if (verificar === true) {
            compareObjects(stateAtual)
        }


        this.setState({ products: Object.values(countryitems[0]).sort(compare) })
    }

    render() {
        const { products } = this.state

        return (
            <div className="container-fluid">
                <NotificationContainer />
                <div className="container">
                    <GlobalData />
                </div>
                <div className="row justify-content-md-center">
                    {products.map(product => (
                        <div className="col-lg-4">
                            <article className="pais-article shadow" key={product.ourid}>
                                <div className="row justify-content-center">
                                    <div className="col-3">
                                        <div className="row">
                                            <div className="col my-auto">
                                                <div className="bandeira text-center">
                                                    <img src={"https://www.countryflags.io/" + product.code + "/flat/64.png"} alt={"Bandeira " + product.title} />
                                                </div>
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