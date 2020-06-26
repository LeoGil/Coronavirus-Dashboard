import { Request, Response } from 'express'
import { api, api_timeline_global } from '../services/api';

interface Country {
    ourid: number;
    title: string;
    code: string;
    total_cases: number;
    total_recovered: number;
    total_deaths: number;
}

class ContriesController {

    async index(request: Request, response: Response) {
        const responseData = await api_timeline_global.get(`/countries?sort=cases`)

        const countryitems = responseData.data

        let countriesData: Array<Object> = []

        Object.keys(countryitems).forEach(key => {

            const { countryInfo } = countryitems[key];

            const countries = {
                ...countryInfo,
                ...countryitems[key]
            }

            countriesData.push(countries)
        })

        return response.json(countriesData);
    }
}

export default ContriesController