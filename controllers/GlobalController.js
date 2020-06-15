"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _api = require('../services/api'); var _api2 = _interopRequireDefault(_api);

class GlobalController {
  async show(request, response){
    const responseData = await _api2.default.get(`/free-api?global=stats`);
    const { results } = responseData.data;
    const world = results[0];

    return response.json(world);
  }

}

exports. default = GlobalController