import { DatePipe } from '@angular/common';
import { Component, input} from '@angular/core';
import { REQ_STATUS } from '../../types/request-status';
import { CurrentWeatherData, HourlyWeatherData } from '../../types/weather-data';

@Component({
  selector: 'app-weather-data',
  imports: [DatePipe],
  templateUrl: './weather-data.html',
  styleUrl: './weather-data.scss',
})

export class WeatherData {
  readonly REQ_STATUS = REQ_STATUS //so the enum is accessible in the template
  currentWeather = input<CurrentWeatherData|null>(null); 
  hourlyWeather = input<HourlyWeatherData|null>(null);
  dataReady = input<REQ_STATUS>(REQ_STATUS.REQ_NOT_STARTED);
}
