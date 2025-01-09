import { PortalhomeService } from './../../services/portalhome.service';
import { Component } from '@angular/core';
import { IAds } from '../../../../../dashboard/modules/ads/interfaces/iads';
import { ShredDataService } from '../../../../../../shared/services/shred-data.service';
import { ToastrService } from 'ngx-toastr';
import { ExploreService } from '../../../../services/explore.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NonAuthorizedUserComponent } from '../non-authorized-user/non-authorized-user.component';

@Component({
  selector: 'app-popular-ads',
  templateUrl: './popular-ads.component.html',
  styleUrl: './popular-ads.component.scss',
})
export class PopularAdsComponent {
  AdsRooms: IAds[] = [];
  limit: number = 5;
  defaultLanguage = localStorage.getItem('language');
  roleUser: string | null = '';
  constructor(
    private _PortalhomeService: PortalhomeService,
    public _ShredDataService: ShredDataService,
    private _ExploreService: ExploreService,
    private _ToastrService: ToastrService,
    private _Router: Router,
    public dialog: MatDialog
  ) {
    _PortalhomeService.getAllAds().subscribe({
      next: (res) => {
        console.log(res);
        this.AdsRooms = res.data.ads;
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
