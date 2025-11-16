import { Component, inject, signal} from '@angular/core';
import { WeatherData } from "./components/weather-data/weather-data";
import { Searchbar } from "./components/searchbar/searchbar";
import { Coords } from './types/location-data';
import { WeatherService } from './services/weather-service';
import { REQ_STATUS } from './types/request-status';
import {WeatherDataAggregate} from './types/weather-data';

@Component({
  selector: 'app-root',
  imports: [WeatherData, Searchbar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [WeatherService]
})
export class App {
  selectedLocation  = signal<Coords>(null);
  private weatherService = inject(WeatherService);

  weatherData = signal<WeatherDataAggregate>({currentWeather: null, hourlyWeather: []});
  reqStatus = signal<REQ_STATUS>(REQ_STATUS.REQ_NOT_STARTED);
       
  setLocation(data: Coords) {
    this.selectedLocation.set(data);
    this.reqStatus.set(REQ_STATUS.REQ_PENDING);
    this.weatherService.getWeatherData(this.selectedLocation()).subscribe({
      next: (result: WeatherDataAggregate) => {
        this.weatherData.set(result);
        this.reqStatus.set(REQ_STATUS.REQ_SUCCESS);
      },
      error: (err) => {
        console.log(err);
        this.reqStatus.set(REQ_STATUS.REQ_ERR);
      }
    }) 
  }
}
