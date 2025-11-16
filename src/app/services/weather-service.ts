import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable()
export class WeatherService {
  private http = inject(HttpClient);

  getWeatherData() {
    return this.http.get('/.netlify/functions/helloWorld'); 
  }
}
