import { Component} from '@angular/core';
import { WeatherData } from "./components/weather-data/weather-data";
import { Searchbar } from "./components/searchbar/searchbar";


type Coords = {
  lat: string,
  lon: string
}

@Component({
  selector: 'app-root',
  imports: [WeatherData, Searchbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  selectedCity : Coords | null = null;
}
