import { Request, Response } from 'express'
import api from '../services/api';

class GlobalController {
  async show(request: Request, response: Response){
    const responseData = await api.get(`/free-api?global=stats`);
    const { results } = responseData.data;
    const world = results[0];

    return response.json(world);
  }

}

export default GlobalController