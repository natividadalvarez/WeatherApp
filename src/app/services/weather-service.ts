import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { WeatherDataAggregate } from '../types/weather-data';
import { Coords } from '../types/location-data';

@Injectable()
export class WeatherService {
  private http = inject(HttpClient);

  getWeatherData(coords: Coords) {
    return this.http.get<WeatherDataAggregate>(`/.netlify/functions/weather?lat=${coords?.lat}&lon=${coords?.lon}`); 
  }
}
