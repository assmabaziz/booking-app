import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  ads: number = 0;
  rooms: number = 0;
  facilities: any = 0;

  getAds(ads: number) {
    this.ads = ads;
  }

  getRooms(rooms: number) {
    this.rooms = rooms;
  }

  getFacilities(facilities: number) {
    this.facilities = facilities;
  }
}
