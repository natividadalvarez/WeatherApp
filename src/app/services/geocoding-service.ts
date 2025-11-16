import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LocationData } from '../types/location-data';

@Injectable()
export class GeocodingService {
  http = inject(HttpClient);

  getLocationSuggestions(location: string) {
    return this.http.get<LocationData[]>(`/.netlify/functions/geocode?query=${location}`);
  }
}
