import { PortalhomeService } from './../../services/portalhome.service';
import { Component } from '@angular/core';
import { IAds } from '../../../../../dashboard/modules/ads/interfaces/iads';
import { ShredDataService } from '../../../../../../shared/services/shred-data.service';

@Component({
  selector: 'app-popular-ads',
  templateUrl: './popular-ads.component.html',
  styleUrl: './popular-ads.component.scss',
})
export class PopularAdsComponent {
  AdsRooms: IAds[] = [];
  limit: number = 5;
defaultLanguage = localStorage.getItem('language')
  constructor(private _PortalhomeService: PortalhomeService, public _ShredDataService :ShredDataService) {
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
