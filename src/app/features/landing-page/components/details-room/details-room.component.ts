import { FacilitiesComponent } from './../../../dashboard/modules/facilities/facilities.component';
import { DetailsRoomService } from '../../services/room-details-service/details-room.service';
import { Component } from '@angular/core';
import { _ } from '@ngx-translate/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { IRoom } from '../../interfaces/iroom';

@Component({
  selector: 'app-details-room',
  templateUrl: './details-room.component.html',
  styleUrl: './details-room.component.scss',
})
export class DetailsRoomComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,

    autoplay: true,
    autoplayTimeout: 2000,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: false,
  };

  room!: IRoom;

  Facilities: any[] = [];

  constructor(private _DetailsRoomService: DetailsRoomService) {
    _DetailsRoomService.getDetailsRoom().subscribe({
      next: (res) => {
        console.log(res);
        this.room = res.data.room;
        this.Facilities = res.data.room.facilities;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
