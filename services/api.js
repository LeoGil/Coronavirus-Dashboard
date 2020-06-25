"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.api_timeline_global = exports.api = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const api = axios.create
const api_timeline_global = _axios.default.create({
  baseURL: "https://disease.sh/v2/"
});

exports.api_timeline_global = api_timeline_global;

const api = _axios.default.create({
  baseURL: "https://api.thevirustracker.com"
});

exports.api = api;