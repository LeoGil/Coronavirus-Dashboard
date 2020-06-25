"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _api = require("../services/api");

class ContryController {
  async show(request, response) {
    const {
      id
    } = request.params;
    const responseData = await _api.api_timeline_global.get(`/countries/${id}`);
    const countrydata = responseData.data;
    const {
      countryInfo
    } = countrydata;
    const country = { ...countryInfo,
      ...countrydata
    };
    delete country.countryInfo;
    return response.json(country);
  }

  async timeline(request, response) {
    const {
      id
    } = request.params;
    const responseData = await _api.api_timeline_global.get(`/historical/${id}?lastdays=all`);
    return response.json(responseData.data);
  }

}

var _default = ContryController;
exports.default = _default;