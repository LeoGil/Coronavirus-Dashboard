"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _api = require('../services/api'); var _api2 = _interopRequireDefault(_api);










class ContriesController {
    async index(request, response) {
        const responseData = await _api2.default.get(`/free-api?countryTotals=ALL`)
        const { countryitems } = responseData.data
        let countries = countryitems[0]

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
        const data = Object.values(countries).sort(sortCountries);
        data.pop();

        return response.json(data);
    }
}

exports. default = ContriesController