import dotenv from 'dotenv';
dotenv.config();

// Define an interface for the Coordinates object
interface Coordinates {
  lat: number;
  lon: number;
}

// Define a class for the Weather object
class Weather {
  id: number;
  main: string;
  description: string;
  icon: string;

  constructor(id: number, main: string, description: string, icon: string) {
    this.id = id;
    this.main = main;
    this.description = description;
    this.icon = icon;
  }
}

// Complete the WeatherService class
class WeatherService {
  baseURL: string;
  apiKey: string;
  cityName: string;

  constructor(baseURL: string, apiKey: string, cityName: string) {
    this.baseURL = baseURL ?? 'https://api.openweathermap.org/data/2.5/weather';
    this.apiKey = apiKey ?? '3f5ebc304658be2d2264d8e8b1683199';
    this.cityName = cityName;
  }

  // Fetch the location data from the API
  private buildGeocodeQuery(): string {
    return `${this.baseURL}?q=${this.cityName}&appid=${this.apiKey}`;
  }

  private buildWeatherQuery(coordinates: Coordinates): string {
    return `${this.baseURL}?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${this.apiKey}`;
  }

  private async fetchAndDestructureLocationData(): Promise<Coordinates> {
    const response = await fetch(this.buildGeocodeQuery());
    const data = await response.json();
    const coordinates: Coordinates = {
      lat: data.coord.lat,
      lon: data.coord.lon
    };
    return coordinates;
  }

  private async fetchWeatherData(coordinates: Coordinates) {
    const response = await fetch(this.buildWeatherQuery(coordinates));
    const data = await response.json();
    return data;
  }

  private parseCurrentWeather(response: any): Weather {
    const { weather } = response;
    return new Weather(weather[0].id, weather[0].main, weather[0].description, weather[0].icon);
  }

  private buildForecastArray(currentWeather: Weather, weatherData: any[]): Weather[] {
    const forecastArray: Weather[] = [];
    forecastArray.push(currentWeather);
    weatherData.forEach((weather: any) => {
      const newWeather = new Weather(weather.id, weather.main, weather.description, weather.icon);
      forecastArray.push(newWeather);
    });
    return forecastArray;
  }

  async getWeatherForCity(city: string) {
    this.cityName = city;
    const coordinates = await this.fetchAndDestructureLocationData();
    const weatherData = await this.fetchWeatherData(coordinates);
    const currentWeather = this.parseCurrentWeather(weatherData);
    const forecastArray = this.buildForecastArray(currentWeather, weatherData.weather);
    console.log(forecastArray);
  }
}

export default new WeatherService('https://api.openweathermap.org/data/2.5/weather', '3f5ebc304658be2d2264d8e8b1683199', 'Saint Paul');
