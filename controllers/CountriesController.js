"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _api = require("../services/api");

class ContriesController {
  // async index(request: Request, response: Response) {
  //     const responseData = await api.get(`/free-api?countryTotals=ALL`)
  //     const { countryitems } = responseData.data
  //     let countries: Country[] = countryitems[0]
  //     function sortCountries(a: Country, b: Country) {
  //         const totalCasesA = a.total_cases
  //         const totalCasesB = b.total_cases
  //         let comparison = 0;
  //         if (totalCasesA < totalCasesB) {
  //             comparison = 1;
  //         } else if (totalCasesA > totalCasesB) {
  //             comparison = -1;
  //         }
  //         return comparison;
  //     }
  //     const data = Object.values(countries).sort(sortCountries);
  //     data.pop();
  //     return response.json(data);
  // }
  async index(request, response) {
    const responseData = await _api.api_timeline_global.get(`/countries?sort=cases`);
    const countryitems = responseData.data;
    let countriesData = [];
    Object.keys(countryitems).forEach(key => {
      const {
        countryInfo
      } = countryitems[key];
      const countries = { ...countryInfo,
        ...countryitems[key]
      };
      countriesData.push(countries);
    });
    return response.json(countriesData);
  }

}

var _default = ContriesController;
exports.default = _default;