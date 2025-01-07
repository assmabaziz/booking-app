import { PortalhomeService } from './../../services/portalhome.service';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { IAds } from '../../../../../dashboard/modules/ads/interfaces/iads';
import { ShredDataService } from '../../../../../../shared/services/shred-data.service';
import { isPlatformBrowser } from '@angular/common';
import { IRoom } from '../../../../interfaces/iroom';

@Component({
  selector: 'app-popular-ads',
  templateUrl: './popular-ads.component.html',
  styleUrl: './popular-ads.component.scss',
})
export class PopularAdsComponent {
  defaultLanguage: string | null = null;
  Rooms: IRoom[] = [];

  constructor(
    private _PortalhomeService: PortalhomeService,
    public _ShredDataService: ShredDataService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(platformId)) {
      // Access localStorage only in the browser
      this.defaultLanguage = localStorage.getItem('language');
    }

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
