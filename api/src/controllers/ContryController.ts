import { Request, Response } from 'express'
import { api_timeline_global } from '../services/api';

class ContryController {

    async show(request: Request, response: Response) {
        const { id } = request.params

        const responseData = await api_timeline_global.get(`/countries/${id}`)

        const countrydata = responseData.data;
        const { countryInfo } = countrydata;
        const country = {
            ...countryInfo,
            ...countrydata
        }
        delete country.countryInfo

        return response.json(country);
    }

    async timeline(request: Request, response: Response) {
        const { id } = request.params

        const responseData = await api_timeline_global.get(`/historical/${id}?lastdays=all`)

        return response.json(responseData.data);
    }

    async timelineNewPerDay(request: Request, response: Response) {
        const { id } = request.params

        const responseData = await api_timeline_global.get(`/historical/${id}?lastdays=all`)
        delete responseData.data['timeline']['recovered']

        let cases = responseData.data['timeline']['cases']
        let deaths = responseData.data['timeline']['deaths']

        let casesNew = {}
        let deathsNew = {}

        let primeiroRegistro = true
        Object.keys(cases).forEach(key => {
            let date = new Date(key)

            if (primeiroRegistro === true) {
                casesNew[key] = cases[key]
                primeiroRegistro = false
            } else {
                function convertDate(inputFormat) {
                    // function pad(s) { return (s === 2020) ? 20 : s; }
                    var d = new Date(inputFormat)
                    return [(d.getMonth() + 1), (d.getDate()), (d.getFullYear().toString().substr(-2))].join('/')
                }
                const lastDate = convertDate(new Date(date.setDate(date.getDate() - 1)))

                casesNew[key] = (cases[key] - cases[lastDate] < 0 ? 0 : cases[key] - cases[lastDate])
            }
        });

        primeiroRegistro = true
        Object.keys(deaths).forEach(key => {
            let date = new Date(key)

            if (primeiroRegistro === true) {
                deathsNew[key] = deaths[key]
                primeiroRegistro = false
            } else {
                function convertDate(inputFormat) {
                    var d = new Date(inputFormat)
                    return [(d.getMonth() + 1), (d.getDate()), (d.getFullYear().toString().substr(-2))].join('/')
                }
                const lastDate = convertDate(new Date(date.setDate(date.getDate() - 1)))

                deathsNew[key] = (deaths[key] - deaths[lastDate] < 0 ? 0 : deaths[key] - deaths[lastDate])
            }
        });

        let newTimeline = responseData.data

        newTimeline['timeline']['cases'] = casesNew
        newTimeline['timeline']['deaths'] = deathsNew

        return response.json(newTimeline);
    }
}

export default ContryController