import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable()
export class GeocodingService {
  http = inject(HttpClient);

  getLocationSuggestions(location: string) {
    return this.http.get('/.netlify/functions/geocode');
  }
}
