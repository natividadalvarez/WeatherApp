import { Component, HostListener, inject, signal } from '@angular/core';
import { GeocodingService } from '../../services/geocoding-service';
import { REQ_STATUS } from '../../types/request-status';


@Component({
  selector: 'app-searchbar',
  imports: [],
  templateUrl: './searchbar.html',
  styleUrl: './searchbar.scss',
  providers: [GeocodingService]
})
export class Searchbar {
  readonly REQ_STATUS = REQ_STATUS
  geocoding = inject(GeocodingService)
  location = signal("");
  suggestions = signal<Array<any>>([]);
  showSuggestions = signal<boolean>(false);
  suggestionsStatus = signal<REQ_STATUS>(REQ_STATUS.REQ_NOT_STARTED)
  searchTimeout = 0

  handleLocationFocus(e: FocusEvent) {
    this.showSuggestions.set(true)
  }

  handleLocationSearch(e: KeyboardEvent) {
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
    console.log(locationEl.dataset['lat'], locationEl.dataset['lon']); 
  }

  requestLocationSuggestions() {
    this.suggestionsStatus.set(REQ_STATUS.REQ_PENDING)
    this.geocoding.getLocationSuggestions(this.location()).subscribe({
      next: (response : any) => {
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

