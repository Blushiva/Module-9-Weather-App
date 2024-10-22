import { Router, Request, Response } from 'express';
;

import weatherService from '../../service/weatherService.js';
import HistoryService from '../../service/historyService.js';

const router = Router();
const weatherAPI = new weatherService('https://api.openweathermap.org/data/2.5/weather', '3f5ebc304658be2d2264d8e8b1683199', 'cityName');


 

// TODO: POST Request with city name to retrieve weather data
// error from html routes ts  due to missing imports look further into this
router.post('/', async(req: Request, res: Response) => {
  console.log(req, res);
  
  // TODO: GET weather data from city name
   const weatherService = new WeatherService();
    weatherService.getWeatherForCity(req.body.city);
} );
  // TODO: save city to search history
router.get ('/history', async (req: Request, res: Response) => {
  const historyService = new HistoryService();
  const cities = await historyService.getCities();
  res.json(cities);
}

// TODO: GET search history
router.get('/history', async (req, res) => {})
const historyService = new HistoryService();
const searchHistory = await historyService.getCities();
res.json(searchHistory);



// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (req, res) => {})

export default router;
