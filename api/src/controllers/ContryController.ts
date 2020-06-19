import { Request, Response } from 'express'
import { api, api_timeline_global } from '../services/api';

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
}

export default ContryController