import { TestBed } from '@angular/core/testing';

import { GeocodingService } from './geocoding-service';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('GeocodingService', () => {
  let service: GeocodingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection(),
        provideHttpClient(),
        provideHttpClientTesting(),
        GeocodingService]
    });
    service = TestBed.inject(GeocodingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
