"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _api = require('../services/api'); var _api2 = _interopRequireDefault(_api);

class ContryController {
    async show(request, response) {
        const { id } = request.params

        const responseData = await _api2.default.get(`/free-api?countryTotal=${id}`)

        const { countrydata } = responseData.data;
        const { info } = countrydata[0];
        const country = {
            ...info,
            ...countrydata[0]
        }
        delete country.info

        return response.json(country);
    }

    async timeline(request, response) {
        const { id } = request.params

        const responseData = await _api2.default.get(`/free-api?countryTimeline=${id}`)

        const { timelineitems } = responseData.data;
        delete timelineitems[0]['stat']

        return response.json(timelineitems);
    }
}

exports. default = ContryController