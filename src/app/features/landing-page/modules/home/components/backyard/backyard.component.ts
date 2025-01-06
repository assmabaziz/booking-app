import { Component } from '@angular/core';
import { PortalhomeService } from '../../services/portalhome.service';
import { IRoom } from '../../../../../dashboard/modules/rooms/interfaces/iroom';
import { ExploreService } from '../../../../services/explore.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-backyard',
  templateUrl: './backyard.component.html',
  styleUrl: './backyard.component.scss',
})
export class BackyardComponent {
  Rooms: IRoom[] = [];
  limit: number = 5;

  constructor(
    private _PortalhomeService: PortalhomeService,
    private _ExploreService: ExploreService,
    private _ToastrService: ToastrService,
    private _Router: Router
  ) {
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
  addRoomToFavorites(id: string) {
    console.log(id);
    this._ExploreService.onAddRoomToFav(id).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
        if (err.error.message === 'Unauthorized') {
          this._ToastrService.error('please login firstly', err.error.message);
          this._Router.navigate(['/auth/signin']);
        }
      },
      complete: () => {
        this._ToastrService.success('Room added to favorites successfully');
      },
    });
  }
}
