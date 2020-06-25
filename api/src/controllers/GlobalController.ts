import { Request, Response } from 'express'
import { api, api_timeline_global } from '../services/api';

class GlobalController {
  // async show(request: Request, response: Response) {
  //   const responseData = await api.get(`/free-api?global=stats`);

  //   const { results } = responseData.data;
  //   const world = results[0];

  //   return response.json(world);
  // }

  async show(request: Request, response: Response) {
    const responseData = await api_timeline_global.get(`/all`);
    const world = responseData.data;

    return response.json(world);
  }

  async timeline(request: Request, response: Response) {
    const responseData = await api_timeline_global.get(`/historical/all?lastdays=all`)

    return response.json(responseData.data);
  }
  
  async topCountriesTimeline(request: Request, response: Response) {
    const countriesIso = request.body

    const responseData = await api_timeline_global.get(`/historical/${countriesIso}?lastdays=all`)

    for (let index = 0; index < responseData.data.length; index++) {
      delete responseData.data[index]['timeline']['deaths']
      delete responseData.data[index]['timeline']['recovered']
    }

    return response.json(responseData.data);
  }

}

export default GlobalController