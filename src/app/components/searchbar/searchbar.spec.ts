import { ComponentFixture, TestBed} from '@angular/core/testing';

import { Searchbar } from './searchbar';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('Searchbar', () => {
  let component: Searchbar;
  let fixture: ComponentFixture<Searchbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Searchbar],
      providers: [
        provideZonelessChangeDetection(),
        provideHttpClient(),
        provideHttpClientTesting()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Searchbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show suggestions box on when clicking on input or suggestions box', async () => {
    spyOn(component, 'handleLocationFocus').and.callThrough();
    const input = fixture.nativeElement.querySelector('.search-input input');
    //clicking on input box shows suggesstions
    input.dispatchEvent(new MouseEvent('mouseup', {bubbles: true}));
    expect(component.handleLocationFocus).toHaveBeenCalled();
    expect(component.showSuggestions()).toBeTrue();
    //so does clicking anywhere in the suggestions box
    await fixture.whenStable()
    let suggestions = fixture.nativeElement.querySelector('.suggestions');
    suggestions.dispatchEvent(new MouseEvent('mouseup', {bubbles: true}));
    expect(component.handleLocationFocus).toHaveBeenCalled();
    expect(component.showSuggestions()).toBeTrue();
  });

  it('should hide suggestions box when clicking anywhere else', async () => {
    spyOn(component, 'handleLocationFocus').and.callThrough();
    const input = fixture.nativeElement.querySelector('.search-input input');
    input.dispatchEvent(new MouseEvent('mouseup', {bubbles: true}));
    expect(component.handleLocationFocus).toHaveBeenCalled();
    expect(component.showSuggestions()).toBeTrue();
    //clicking anywhere else closes the suggesstions
    document.body.click();
    let suggestions = fixture.nativeElement.querySelector('.suggestions');
    await fixture.whenStable();
    expect(component.showSuggestions()).toBeFalse();
    expect(suggestions).toBeNull();
  });
});
