import { Component } from '@angular/core';
import { PortalhomeService } from '../../services/portalhome.service';
import { IRoom } from '../../../../../dashboard/modules/rooms/interfaces/iroom';

@Component({
  selector: 'app-backyard',
  templateUrl: './backyard.component.html',
  styleUrl: './backyard.component.scss',
})
export class BackyardComponent {
  Rooms: IRoom[] = [];
  limit: number = 5;

  constructor(private _PortalhomeService: PortalhomeService) {
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
