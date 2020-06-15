import express from 'express'

import ContryController from './controllers/ContryController'
import CountriesController from './controllers/CountriesController'
import GlobalController from './controllers/GlobalController'

const routes = express.Router()

const contryController = new ContryController()
const countriesController = new CountriesController()
const globalController = new GlobalController()

//Mensagem de boas vindas
routes.get('/', (request, response) => {
  return response.json({
    message: 'Coronavirus-Dashboard Server API: https://leogil.github.io/Coronavirus-Dashboard'

  })
})

//Rotas do CONTRY
routes.get('/country/:id', contryController.show)

//Rotas do CONTRIES
routes.get('/countries', countriesController.index)

//Rotas do GLOBAL
routes.get('/global', globalController.show)
export default routes;