import express from 'express'

import ContryController from './controllers/ContryController'
import CountriesController from './controllers/CountriesController'
import GlobalController from './controllers/GlobalController'

const routes = express.Router()

const contryController = new ContryController()
const countriesController = new CountriesController()
const globalController = new GlobalController()

//Rotas do CONTRY
//routes.get('/contry/:code', contryController.show)

//Rotas do CONTRIES
routes.get('/countries', countriesController.index)

//Rotas do GLOBAL
//routes.get('/global', globalController.index)
export default routes;