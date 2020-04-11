import React, { Component } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'

import GlobalData from '../../components/Global'

import './styles.css'

export default class Main extends Component {
    state = {
        products: [],
    }

    componentDidMount() {
        this.loadProducts()
        this.interval = setInterval(() => { this.loadProducts(); console.log('atualizado') }, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    loadProducts = async () => {
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

        this.setState({ products: Object.values(countryitems[0]).sort(compare) })
    }

    render() {
        const { products } = this.state

        return (
            <div class="container-fluid">
                <GlobalData />
                <div class="row justify-content-md-center">
                    {products.map(product => (
                        <div class="col-lg-4">
                            <article className="pais-article shadow" key={product.ourid}>
                                <div class="row">
                                    <div class="col"><img className="bandeira" src={"https://www.countryflags.io/" + product.code + "/flat/64.png"} /></div>
                                    <div class="col font-weight-bold"><div class="text-center">Pais</div></div>
                                    <div class="col font-weight-bold"><div class="text-center">Casos</div></div>
                                    <div class="col font-weight-bold"><div class="text-center">Mortes</div></div>
                                    <div class="col font-weight-bold"><div class="text-center">Recuperados</div></div>
                                    <div class="w-100"></div>
                                    <div class="col">{}</div>
                                    <div class="col"><div class="text-center">{product.title}</div></div>
                                    <div class="col"><div class="text-center">{product.total_cases}</div></div>
                                    <div class="col"><div class="text-center">{product.total_deaths}</div></div>
                                    <div class="col"><div class="text-center">{product.total_recovered}</div></div>
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