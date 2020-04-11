import React, { Component } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'

import Header from '../../components/Header'

import './styles.css'

export default class Main extends Component {
    state = {
        products: [],
    }

    componentDidMount() {
        this.loadProducts()
        this.interval = setInterval(() => { this.loadProducts() }, 5000);
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
            <div className="product-list">
                {products.map(product => (
                    <article key={product.ourid}>
                        <img className="bandeira" src={"https://www.countryflags.io/" + product.code + "/flat/64.png"} />
                        <strong>{product.title}</strong>
                        <p>Total de casos:</p>
                        <p>{product.total_cases}</p>

                        <p>Total de mortes:</p>
                        <p>{product.total_deaths}</p>

                        <p>Total recuperados:</p>
                        <p>{product.total_recovered}</p>

                        <p>Total ativos:</p>
                        <p>{product.total_active_cases}</p>

                        <p>Quantidade casos diarios:</p>
                        <p>{product.total_new_cases_today}</p>

                        <p>Quantidade mortes diarios:</p>
                        <p>{product.total_new_deaths_today}</p>
                    </article>
                ))
                }
            </div >
        )
    }
}