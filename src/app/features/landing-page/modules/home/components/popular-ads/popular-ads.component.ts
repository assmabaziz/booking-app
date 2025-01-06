import { PortalhomeService } from './../../services/portalhome.service';
import { Component } from '@angular/core';
import { IAds } from '../../../../../dashboard/modules/ads/interfaces/iads';
import { ShredDataService } from '../../../../../../shared/services/shred-data.service';
import { ToastrService } from 'ngx-toastr';
import { ExploreService } from '../../../../services/explore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popular-ads',
  templateUrl: './popular-ads.component.html',
  styleUrl: './popular-ads.component.scss',
})
export class PopularAdsComponent {
  AdsRooms: IAds[] = [];
  limit: number = 5;
  defaultLanguage = localStorage.getItem('language');
  constructor(
    private _PortalhomeService: PortalhomeService,
    public _ShredDataService: ShredDataService,
    private _ExploreService: ExploreService,
    private _ToastrService: ToastrService,
    private _Router: Router
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
