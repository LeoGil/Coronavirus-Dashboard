"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _ContryController = _interopRequireDefault(require("./controllers/ContryController"));

var _CountriesController = _interopRequireDefault(require("./controllers/CountriesController"));

var _GlobalController = _interopRequireDefault(require("./controllers/GlobalController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = _express.default.Router();

const contryController = new _ContryController.default();
const countriesController = new _CountriesController.default();
const globalController = new _GlobalController.default(); //Mensagem de boas vindas

routes.get('/', (request, response) => {
  return response.json({
    message: 'Coronavirus-Dashboard Server API: https://leogil.github.io/Coronavirus-Dashboard'
  });
}); //Rotas do CONTRY

routes.get('/country/:id', contryController.show);
routes.get('/country_timeline/:id', contryController.timeline); //Rotas do CONTRIES

routes.get('/countries', countriesController.index); //Rotas do GLOBAL

routes.get('/global', globalController.show);
routes.get('/global_timeline', globalController.timeline);
routes.post('/top_countries_timeline', globalController.topCountriesTimeline);
var _default = routes;
exports.default = _default;