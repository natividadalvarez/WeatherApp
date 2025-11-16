import { Component} from '@angular/core';
import { WeatherData } from "./components/weather-data/weather-data";

@Component({
  selector: 'app-root',
  imports: [WeatherData],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
}
