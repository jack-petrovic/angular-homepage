import { Component } from '@angular/core';
import { HousingLocation } from "../housing-location/housing-location";
import { HousingLocationInfo } from '../housinglocation';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.css'],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location [housingLocation]="housingLocationList"></app-housing-location>
    </section>
  `,
  imports: [HousingLocation],
})
export class Home {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocationList: HousingLocationInfo = {
    id: 9999,
    name: 'Test Housing Location',
    city: 'Test City',
    state: 'Test State',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}
