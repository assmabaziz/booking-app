import { Component } from '@angular/core';
import { PortalhomeService } from '../../services/portalhome.service';
import { IRoom } from '../../../../../dashboard/modules/rooms/interfaces/iroom';
import { IAds } from '../../../../../dashboard/modules/ads/interfaces/iads';
import { ExploreService } from '../../../../services/explore-service/explore.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NonAuthorizedUserComponent } from '../non-authorized-user/non-authorized-user.component';

@Component({
  selector: 'app-backyard',
  templateUrl: './backyard.component.html',
  styleUrl: './backyard.component.scss',
})
export class BackyardComponent {
  Rooms: IRoom[] = [];
  limit: number = 5;
  roleUser: string | null = '';
AdsRooms: IAds[] = [];
  constructor(
    private _PortalhomeService: PortalhomeService,
    private _ExploreService: ExploreService,
    private _ToastrService: ToastrService,
    private _Router: Router,
    public dialog: MatDialog
  ) {
     _PortalhomeService.getAllAds().subscribe({
      next: (res) => {
        this.AdsRooms = res.data.ads;
      },
      error: (err) => {
        console.log(err);
      },
    });
    _PortalhomeService.getAllRooms().subscribe({
      next: (res) => {
        this.Rooms = res.data.rooms;
      },
      error: (err) => {
        console.log(err);
      },
    });
    if (localStorage) {
      this.roleUser = localStorage.getItem('userRole');
    }
  }
  addRoomToFavorites(id: string) {
    console.log(id);
    this._ExploreService.onAddRoomToFav(id).subscribe({
      next: (res) => {
      },
      error: (err) => {
        this._ToastrService.error(err.error.message)
      },
      complete: () => {
        this._ToastrService.success('Room added to favorites successfully');
      },
    });
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(NonAuthorizedUserComponent, {
      width: '60%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
