"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);

var _ContryController = require('./controllers/ContryController'); var _ContryController2 = _interopRequireDefault(_ContryController);
var _CountriesController = require('./controllers/CountriesController'); var _CountriesController2 = _interopRequireDefault(_CountriesController);
var _GlobalController = require('./controllers/GlobalController'); var _GlobalController2 = _interopRequireDefault(_GlobalController);

const routes = _express2.default.Router()

const contryController = new (0, _ContryController2.default)()
const countriesController = new (0, _CountriesController2.default)()
const globalController = new (0, _GlobalController2.default)()

//Rotas do CONTRY
routes.get('/country/:id', contryController.show)

//Rotas do CONTRIES
routes.get('/countries', countriesController.index)

//Rotas do GLOBAL
routes.get('/global', globalController.show)
exports. default = routes;