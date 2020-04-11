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
                                    <div class="col font-weight-bold">Pais</div>
                                    <div class="col font-weight-bold">Casos</div>
                                    <div class="col font-weight-bold">Mortes</div>
                                    <div class="col font-weight-bold">Recuperados</div>
                                    <div class="w-100"></div>
                                    <div class="col">{}</div>
                                    <div class="col">{product.title}</div>
                                    <div class="col">{product.total_cases}</div>
                                    <div class="col">{product.total_deaths}</div>
                                    <div class="col">{product.total_recovered}</div>
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