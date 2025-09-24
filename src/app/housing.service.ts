import { Injectable } from '@angular/core';
import { HousingLocationInfo } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = 'http://localhost:3000/locations';

  async getAllHousingLocations(): Promise<HousingLocationInfo[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocationInfo | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) as HousingLocationInfo | undefined;
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Home application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}`);
  }
}
