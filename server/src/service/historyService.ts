import { get } from "http";

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
      this.cities = cities
    });}}


    // the logic to read the searchHistory.json file
    private async read(): Promise<City[]> {
      return [];

    public async read(): Promise<City[]> {
      get cities() {};

      public async addCity(city: City): void {
        this.cities.push(city);
        this.write();
      }
      public removeCity(id: string): void{
        this.cities = this.cities.filter(city => city.id !== id);
        this.write();
      }

      export default HistoryService;

  // TODO: Define a read method that reads from the searchHistory.json file
     private async read() {
        const data = await fs.promises.readFile('searchHistory.json', 'utf-8');
        return JSON.parse(data);
     }
    }

  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  // private async write(cities: City[]) {}


  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  // async getCities() {}


  // TODO Define an addCity method that adds a city to the searchHistory.json file
  // async addCity(city: string) {}

  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  // async removeCity(id: string) {}
}

export default new HistoryService();
