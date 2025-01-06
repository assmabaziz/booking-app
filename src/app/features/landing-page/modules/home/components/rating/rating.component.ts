import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ShredDataService } from '../../../../../../shared/services/shred-data.service';
@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class RatingComponent {
  constructor( public _ShredDataService :ShredDataService){}
}
