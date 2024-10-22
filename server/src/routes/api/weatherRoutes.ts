// imports from express, weatherService, and historyService 
import { Router, Request, Response } from 'express';
import weatherService from '../../service/weatherService.js';
import HistoryService from '../../service/historyService.js';

const router = Router();
const weatherAPI = new weatherService(
  'https://api.openweathermap.org/data/2.5/weather', '3f5ebc304658be2d2264d8e8b1683199', 'cityName'
);


// POST Request to get weather data for a city
router.post('/', async (req: Request, res: Response) => {
  try {
    const { city } = req.body;
    const weatherData = await weatherAPI.getWeatherForCity(city);
    res.json(weatherData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

// GET search history
router.get('/history', async (req: Request, res: Response) => {
  try {
    const historyService = new HistoryService();
    const cities = await historyService.getCities();
    res.json(cities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch search history' });
  }
});

// DELETE a city from search history
router.delete('/history/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const historyService = new HistoryService();
    await historyService.deleteCity(id);
    res.status(200).json({ message: 'City deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete city from history' });
  }
});

export default router;

