import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinates {
  lat: number;
  lon: number;
}

// TODO: Define a class for the Weather object

// TODO: Complete the WeatherService class
class WeatherService {
    id: number;
    main:string;
    description:string;
    icon:string;

    constructor(id: number, main: string, description: string, icon: string){
        this.id = id;
        this.main = main;
        this.description = description;
        this.icon = icon;
    }
}

    const myWeather = new WeatherService(1, 'Clouds', 'overcast clouds', '04d');
    console.log(myWeather);

    class weatherService {


  // TODO: Define the baseURL, API key, and city name properties
   baseURL: string;
    apiKey: string;
    cityName: string;


  constructor(baseURL: string, apiKey: string, cityName: string) {
    this.baseURL = baseURL ?? 'https://api.openweathermap.org/data/2.5/weather';
    this.apiKey = apiKey ??  '3f5ebc304658be2d2264d8e8b1683199';
    this.cityName = cityName;
  }
  // Fetch the location data from the API
  // TODO: Create destructureLocationData method

  private async fetchLocationData(query:string) {
  //3f5ebc304658be2d2264d8e8b1683199 api key from weather URL
  const response = await fetch(this.baseURL);


    private buildGeocodeQuery(): string {
        return `${this.baseURL}?q=${this.cityName}&appid=${this.apiKey}`;
    }


  // TODO: Create buildWeatherQuery method

  private buildWeatherQuery(coordinates: Coordinates): string {
    return `${this.baseURL}?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${this.apiKey}`;
  }
  // private buildWeatherQuery(coordinates: Coordinates): string {}
  // TODO: Create fetchAndDestructureLocationData method
    const fetchAndDestructureLocationData = async () => {
        const response = await fetch(this.buildGeocodeQuery());
        const data = await response.json();
        const coordinates = this.destructureLocationData(data);
        return coordinates;
    }

  // private async fetchAndDestructureLocationData() {}
  // TODO: Create fetchWeatherData method
  // private async fetchWeatherData(coordinates: Coordinates) {}
  // TODO: Build parseCurrentWeather method
  // private parseCurrentWeather(response: any) {}
  // TODO: Complete buildForecastArray method
  // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
  // TODO: Complete getWeatherForCity method
  // async getWeatherForCity(city: string) {}
  async getWeatherForCity(city: string) {
    //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

    const URL = '${this.baseURL}?q=${city}&appid=${this.apiKey}';
    const weatherForCity  = await fetch(URL);
    console.log(weatherForCity);
export default new weatherService('https://api.openweathermap.org/data/2.5/weather', '3f5ebc304658be2d2264d8e8b1683199', 'London');

export default new WeatherService();
