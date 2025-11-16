import { DatePipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { WeatherService } from '../../services/weather-service';

enum REQ_STATUS {
  REQ_PENDING,
  REQ_SUCCESS,
  REQ_ERR
}

@Component({
  selector: 'app-weather-data',
  imports: [DatePipe],
  templateUrl: './weather-data.html',
  styleUrl: './weather-data.scss',
  providers: [WeatherService]
})
export class WeatherData implements OnInit {
  private weatherService = inject(WeatherService);
  readonly REQ_STATUS = REQ_STATUS //so the enum is accessible in the template
  currentWeather = signal<any>({}); 
  hourlyWeather = signal<any>({});
  dataReady = signal<REQ_STATUS>(REQ_STATUS.REQ_PENDING);

  ngOnInit(): void {
    this.weatherService.getWeatherData().subscribe({
      next: (result: any) => {
        this.currentWeather.set(result.currentWeather);
        this.hourlyWeather.set(result.hourlyWeather);
        this.dataReady.set(REQ_STATUS.REQ_SUCCESS);
      },
      error: (err) => {
        console.log(err);
        this.dataReady.set(REQ_STATUS.REQ_ERR);
      }
    })    
  }
}
