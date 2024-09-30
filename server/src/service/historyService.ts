import { get } from "http";
import * as fs from 'fs';

// TODO: Define a City class with name and id properties
class City {
  id: string;
  name: string;
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

// TODO: Complete the HistoryService class
class HistoryService {
  private cities: City[] = [];

  constructor() {
    this.read().then((cities) => {
      this.cities = cities;
    });
  }

  // the logic to read the searchHistory.json file
  private async read(): Promise<City[]> {
    try {
      const data = await fs.promises.readFile('searchHistory.json', 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      console.log('Error reading searchHistory.json', error);
      return [];
    }
  }
  // TODO Define an addCity method that adds a city to the searchHistory.json file
  // the logic to add a city to the searchHistory.json file
  public async addCity(city: City): Promise<void> {
    this.cities.push(city);
    await this.write();
  }
  // the logic to get the cities from the searchHistory.json file
  public async getCities(): Promise<City[]> {
    return await this.read();
  }


  

  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  private async write(): Promise<void> {
    try {
      await fs.promises.writeFile('searchHistory.json', JSON.stringify(this.cities));
    } catch (error) {
      console.log('Error writing to searchHistory.json', error);
    }
  }

  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  public async removeCity(id: string): Promise<void> {
    this.cities = this.cities.filter(city => city.id !== id);
    await this.write();
  }

}


  


export default new HistoryService();
