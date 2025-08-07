import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';

import { PortalhomeService } from './../../services/portalhome.service';
import { IAds } from '../../../../../dashboard/modules/ads/interfaces/iads';
import { ShredDataService } from '../../../../../../shared/services/shred-data.service';
import { IRoom } from '../../../../interfaces/iroom';
import { ExploreService } from '../../../../services/explore-service/explore.service';
import { NonAuthorizedUserComponent } from '../non-authorized-user/non-authorized-user.component';
import { HelperService } from '../../../../../../shared/services/helper.service';

@Component({
  selector: 'app-popular-ads',
  templateUrl: './popular-ads.component.html',
  styleUrl: './popular-ads.component.scss',
})
export class PopularAdsComponent {
  defaultLanguage: string | null = null;
  Rooms: IRoom[] = [];
 AdsRooms: IAds[] = [];
  limit: number = 5;
  roleUser: any;
  constructor(
    private _PortalhomeService: PortalhomeService,
    public _ShredDataService: ShredDataService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private _ExploreService: ExploreService,
    private _ToastrService: ToastrService,
    public dialog: MatDialog, 
    private helperService : HelperService
  ) {

 if (this.helperService.isPlatformBrowser())  {
   this.defaultLanguage = localStorage.getItem('language');

      }
  _PortalhomeService.getAllAds().subscribe({
    next: (res) => {
        this.AdsRooms = res.data.ads;
      },
      error: (err) => {
        // console.log(err);
      },
    })
    _PortalhomeService.getAllRooms().subscribe({
      next: (res) => {
        this.Rooms = res.data.rooms;
      },
      error: (err) => {
        // console.log(err);
      },
    });

     if (this.helperService.isPlatformBrowser())  {
       if (localStorage) {
         this.roleUser = localStorage.getItem('userRole');
       }
      }
  }

  addRoomToFavorites(id: string) {
    // console.log(id);
    this._ExploreService.onAddRoomToFav(id).subscribe({
      next: (res) => {},
      error: (err) => {},
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
