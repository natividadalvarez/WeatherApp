import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherData } from './weather-data';
import { provideZonelessChangeDetection } from '@angular/core';

describe('WeatherData', () => {
  let component: WeatherData;
  let fixture: ComponentFixture<WeatherData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherData],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
