"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _api = require('../services/api');

class ContryController {
    // async show(request: Request, response: Response) {
    //     const { id } = request.params

    //     const responseData = await api.get(`/free-api?countryTotal=${id}`)

    //     const { countrydata } = responseData.data;
    //     const { info } = countrydata[0];
    //     const country = {
    //         ...info,
    //         ...countrydata[0]
    //     }
    //     delete country.info

    //     return response.json(country);
    // }

    async show(request, response) {
        const { id } = request.params

        const responseData = await _api.api_timeline_global.get(`/countries/${id}`)

        const countrydata = responseData.data;
        const { countryInfo } = countrydata;
        const country = {
            ...countryInfo,
            ...countrydata
        }
        delete country.countryInfo

        return response.json(country);
    }

    // async timeline(request: Request, response: Response) {
    //     const { id } = request.params

    //     const responseData = await api.get(`/free-api?countryTimeline=${id}`)

    //     const { timelineitems } = responseData.data;
    //     delete timelineitems[0]['stat']

    //     return response.json(timelineitems);
    // }

    async timeline(request, response) {
        const { id } = request.params

        const responseData = await _api.api_timeline_global.get(`/historical/${id}?lastdays=all`)

        return response.json(responseData.data);
    }
}

exports. default = ContryController