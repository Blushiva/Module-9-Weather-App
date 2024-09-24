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

    constructor(id, main, description, icon){
        this.id = id;
        this.main = main;
        this.description = description;
        this.icon = icon;
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


  // private destructureLocationData(locationData: Coordinates): Coordinates {}
  // TODO: Create buildGeocodeQuery method
  // private buildGeocodeQuery(): string {}
  // TODO: Create buildWeatherQuery method
  // private buildWeatherQuery(coordinates: Coordinates): string {}
  // TODO: Create fetchAndDestructureLocationData method
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
    //https://api.openweathermap.org/data/2.5/weather?q=London&appid=3f5ebc304658be2d2264d8e8b1683199 
    
    const URL = '${this.baseURL}?q=${city}&appid=${this.apiKey}';
    const weatherForCity  = await fetch(URL);
    console.log(weatherForCity);
}

export default new WeatherService();
