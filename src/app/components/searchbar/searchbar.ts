import { Component, HostListener, inject, output, signal } from '@angular/core';
import { GeocodingService } from '../../services/geocoding-service';
import { REQ_STATUS } from '../../types/request-status';
import { Coords, LocationData } from '../../types/location-data';


@Component({
  selector: 'app-searchbar',
  imports: [],
  templateUrl: './searchbar.html',
  styleUrl: './searchbar.scss',
  providers: [GeocodingService]
})
export class Searchbar {
  geocoding = inject(GeocodingService)
  setLocation = output<Coords>()
  
  readonly REQ_STATUS = REQ_STATUS
  location = signal("");
  suggestions = signal<LocationData[]>([]);
  showSuggestions = signal<boolean>(false);
  suggestionsStatus = signal<REQ_STATUS>(REQ_STATUS.REQ_NOT_STARTED)
  searchTimeout = 0

  handleLocationFocus(e: FocusEvent) {
    this.showSuggestions.set(true)
  }

  handleLocationSearch(e: KeyboardEvent) {
    if(e.key == "Enter" && this.location().length > 0) {
      let coords : Coords = {
        lat: this.suggestions()[0].lat, 
        lon: this.suggestions()[0].lon 
      }
      this.sendWeatherDataRequest(coords);
      return; 
    }
    let inputEl = <HTMLInputElement> e.currentTarget;
    this.location.set(inputEl.value);
    clearTimeout(this.searchTimeout);
    if(this.location().length > 0) {
      //slight delay so as to not spam requests for every key stroke
      this.searchTimeout = setTimeout(this.requestLocationSuggestions.bind(this), 500);
    } else {
      this.suggestions.set([]);
      this.suggestionsStatus.set(REQ_STATUS.REQ_NOT_STARTED)
    }
  }

  handleLocationSelect(e: MouseEvent) {
    let locationEl = <HTMLParagraphElement> e.currentTarget;
    let coords: Coords = {
      lat: locationEl.dataset['lat'] || "",
      lon: locationEl.dataset['lon'] || ""
    }
    this.sendWeatherDataRequest(coords)
  }

  sendWeatherDataRequest(coords: Coords) {
    this.suggestions.set([]);
    this.location.set("");
    this.suggestionsStatus.set(REQ_STATUS.REQ_NOT_STARTED);
    this.showSuggestions.set(false);
    this.setLocation.emit(coords);
  }

  requestLocationSuggestions() {
    this.suggestionsStatus.set(REQ_STATUS.REQ_PENDING)
    this.geocoding.getLocationSuggestions(this.location()).subscribe({
      next: (response : LocationData[]) => {
        this.suggestionsStatus.set(REQ_STATUS.REQ_SUCCESS)
        console.log(response);
        this.suggestions.set(response);
      },
      error: (err: any) => {
        console.error(err);
        this.suggestionsStatus.set(REQ_STATUS.REQ_ERR)
      }      
    })
  }
  //this is just to close the location suggesstions,
  //when the user clicks anywhere that isn't the input box or a suggestion item
  @HostListener('document:click', ['$event'])
  onDocClick(event: MouseEvent) {
    let queryBox = document.querySelector(".search-input");
    let clickTarget = <HTMLElement> event.target
    if(!queryBox?.contains(clickTarget))
      this.showSuggestions.set(false);
  }
}

