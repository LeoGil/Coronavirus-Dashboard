import { Request, Response } from 'express'
import api from '../services/api';

class ContryController {
    async show(request: Request, response: Response) {
        const { id } = request.params

        const responseData = await api.get(`/free-api?countryTotal=${id}`)

        const { countrydata } = responseData.data;
        const { info } = countrydata[0];
        const country = {
            ...info,
            ...countrydata[0]
        }
        delete country.info

        return response.json(country);
    }
}

export default ContryController