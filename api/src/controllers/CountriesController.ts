import { Request, Response } from 'express'
import api from '../services/api';

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
        const responseData = await api.get(`/free-api?countryTotals=ALL`)
        const { countryitems } = responseData.data
        let countries: Country[] = countryitems[0]

        function sortCountries(a: Country, b: Country) {
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
        const data = Object.values(countries).sort(sortCountries);
        data.pop();

        return response.json(data);
    }
}

export default ContriesController