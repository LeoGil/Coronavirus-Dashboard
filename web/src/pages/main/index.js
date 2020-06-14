import React, { Component } from 'react'
import api from '../../services/api'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import GlobalData from '../../components/Global'
import CountryCard from '../../components/CountryCard'

export default class Main extends Component {
    state = {
        data: [],
        globaldata: [],
    }

    componentDidMount() {
        this.loadCountryData()
        this.loadGlobalData()
        this.interval = setInterval(() => { this.loadCountryData(false, this.state.data); this.loadGlobalData() }, 10000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    loadCountryData = async (verificar, stateAtual) => {
        const response = await api.get(`/free-api?countryTotals=ALL`)
        const { countryitems } = response.data

        function sortCountries(a, b) {
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
            //     function createNotification(type, code, title, body = null) {
            //         switch (type) {
            //             case 'info':
            //                 NotificationManager.info('Atualizado global', null, 1000);
            //                 break;
            //             case 'success':
            //                 NotificationManager.success('Success message', 'Title here', 1000);
            //                 break;
            //             case 'warning':
            //                 NotificationManager.warning(<img src={'https://www.countryflags.io/' + code + '/flat/64.png'} />, title, 0);
            //                 break;
            //             default:
            //                 NotificationManager.error('Error message', 'Click me!', 0, () => {
            //                     alert('callback');
            //                 });
            //                 break;
            //         }
            //     };

            var countryChecker = stateAtual
            var countryReturnTest = Object.values(countryitems[0]).sort(sortCountries)

            //     function comparer(otherArray) {
            //         return function (current) {
            //             return otherArray.filter(function (other) {
            //                 return other.total_cases === current.total_cases &&
            //                     other.total_recovered === current.total_recovered &&
            //                     other.total_deaths === current.total_deaths
            //             }).length === 0;
            //         }
            //     }

            //     var onlyInA = countryChecker.filter(comparer(countryReturnTest));
            //     var onlyInB = countryReturnTest.filter(comparer(countryChecker));

            //     var result = onlyInA.concat(onlyInB);

            //     //Verifica se teve alguma modificação
            //     if (Object.keys(result).length !== 0 && result.constructor === Array) {
            //         createNotification('warning', 'US', 'USA');
            //     }

            //     // console.log(countryChecker[1].total_cases)
            //     // createNotification('warning', countryChecker[1].code)
            //     console.log(result)

            //     // OUTRO MODO DE FAZER
            const result1 = countryChecker.filter(
                ({ value: value1, display: display1 }) => !countryReturnTest.some(({ value: value2, display: display2 }) => value2 === value1 && display2 === display1)
            );

            const result2 = countryReturnTest.filter(
                ({ value: value1, display: display1 }) => !countryChecker.some(({ value: value2, display: display2 }) => value2 === value1 && display2 === display1)
            );

            var results = result1.concat(result2);
            console.log(results);
        }

        if (verificar === true) {
            compareObjects(stateAtual)
        }

        delete countryitems[0]['stat'];

        this.setState({ data: Object.values(countryitems[0]).sort(sortCountries) });
    }

    loadGlobalData = async () => {
        const response = await api.get(`/free-api?global=stats`);
        const { results } = response.data;


        this.setState({ globaldata: results[0] });
    }

    render() {
        const { data, globaldata } = this.state;

        return (
            <div className="container-fluid">
                <NotificationContainer />
                <div className="container">
                    <GlobalData globaldata={globaldata} />
                </div>
                <div className="row justify-content-md-center">
                    {data.map(data_map => (
                        <CountryCard
                            key={data_map.ourid}
                            country={data_map}
                        />
                    ))}
                </div >
            </div >
        )
    }
}