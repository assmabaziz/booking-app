import { Component } from '@angular/core';
import { PortalhomeService } from '../../services/portalhome.service';
import { IRoom } from '../../../../../dashboard/modules/rooms/interfaces/iroom';
import { IAds } from '../../../../../dashboard/modules/ads/interfaces/iads';

@Component({
  selector: 'app-backyard',
  templateUrl: './backyard.component.html',
  styleUrl: './backyard.component.scss',
})
export class BackyardComponent {
  Rooms: IRoom[] = [];
  limit: number = 5;
  AdsRooms: IAds[] = [];

  constructor(private _PortalhomeService: PortalhomeService) {
    _PortalhomeService.getAllAds().subscribe({
      next: (res) => {
        console.log(res);
        this.AdsRooms = res.data.ads;
      },
      error: (err) => {
        console.log(err);
      },
    });

    _PortalhomeService.getAllRooms().subscribe({
      next: (res) => {
        console.log(res);
        this.Rooms = res.data.rooms;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
