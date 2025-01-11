import { Component } from '@angular/core';
import { ExploreService } from '../../services/explore-service/explore.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { IRoom } from '../../interfaces/iroom';
import { ShredDataService } from '../../../../shared/services/shred-data.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent {
  constructor(
    private _ExploreService: ExploreService,
    public _ShredDataService: ShredDataService,
    private _ToastrService: ToastrService
  ) {}
  roomList: IRoom[] = [];
  ngOnInit(): void {
    this.getAllFavourites();
  }
  getAllFavourites() {
    this._ExploreService.onGetUserFavourites().subscribe({
      next: (res) => {
        this.roomList = res.data.favoriteRooms[0].rooms;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  deleteFromFavourites(id: string) {
    this._ExploreService.onDeleteFavourite(id).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this._ToastrService.success('Room removed from favorites successfully');
        this.getAllFavourites();
      },
    });
  }
}
