import { PortalhomeService } from './../../services/portalhome.service';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { IAds } from '../../../../../dashboard/modules/ads/interfaces/iads';
import { ShredDataService } from '../../../../../../shared/services/shred-data.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-popular-ads',
  templateUrl: './popular-ads.component.html',
  styleUrl: './popular-ads.component.scss',
})
export class PopularAdsComponent {
  AdsRooms: IAds[] = [];
  limit: number = 5;
  defaultLanguage: string | null = null;

  constructor(
    private _PortalhomeService: PortalhomeService,
    public _ShredDataService: ShredDataService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(platformId)) {
      // Access localStorage only in the browser
      this.defaultLanguage = localStorage.getItem('language');

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
  }
}
