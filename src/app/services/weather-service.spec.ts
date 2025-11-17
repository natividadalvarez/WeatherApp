import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather-service';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection(), 
        provideHttpClient(),
        provideHttpClientTesting(),
        WeatherService]
    });
    service = TestBed.inject(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
