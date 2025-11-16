import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { WeatherDataAggregate } from '../types/weather-data';

@Injectable()
export class WeatherService {
  private http = inject(HttpClient);

  getWeatherData() {
    return this.http.get<WeatherDataAggregate>('/.netlify/functions/weather'); 
  }
}
