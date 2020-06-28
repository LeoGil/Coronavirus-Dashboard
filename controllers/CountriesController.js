"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _api = require("../services/api");

class ContriesController {
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