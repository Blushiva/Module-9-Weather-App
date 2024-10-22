// Imports the necessary modules from the node standard library
// Imports the Weather Service class layer
// Creates an Instance of the Weather Service class
// Defines the Post Route Handler for the root path
// Exports the Router as the default export


import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Router, Request, Response } from 'express';
import { readFile } from 'fs';
// imports from weatherservice
import WeatherService from '../service/weatherService';

// handles file paths in modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Creates instance of wetherService class
const router = Router();
const weatherService = new weatherService('https://api.openweathermap.org/data/2.5/weather', '3f5ebc304658be2d2264d8e8b1683199', '');

// Defines route to serve index.html
router.get('/', (req:Request, res:Response) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
  const fullPath = path.join(__dirname, '../../client/dist/index.html');
  readFile(fullPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading file');
        return;
      }
      res.send(data);
    });
  });

  //defines the route to index html file
router.post('/', async (req: any, res: any) => {
  try {
    const { city } = req.body;
    if (!city) {
      return res.status(400).send('City is required');
    }
//gets the weather data for the city
    const weatherData = await weatherService.getWeatherForCity(city);

    //sends the weather data as a response
    res.status(200).send('Weather data fetched successfully');
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).send('Internal Server Error');
  }
});


//exports the router as the default export
export default router;
