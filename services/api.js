"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);

// const api = axios.create
const api_timeline_global = _axios2.default.create({ baseURL: "https://disease.sh/v2/" })

const api = _axios2.default.create({ baseURL: "https://api.thevirustracker.com" })

exports.api = api; exports.api_timeline_global = api_timeline_global;