import { Component } from '@angular/core';
import { ShredDataService } from '../../../../../../shared/services/shred-data.service';
import { FormGroup, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrl: './explorer.component.scss',
  providers: [DatePipe],
})
export class ExplorerComponent {
  params: any;
  constructor( public _ShredDataService :ShredDataService, private _DatePipe : DatePipe, private _Router :Router){}
  searchRoomsForm :FormGroup = new FormGroup({
    startDate: new FormControl(null),
    endDate: new FormControl(null),
    capacity: new FormControl(null),
  });
  personNumber=0
  changeCount(count:number){
    if(count >= 1 && count <= 5){
      this.personNumber = count
    }
  }
  searchRoomsByParams(data:FormGroup) : void {
    this.params = data.value;
     let start = this._DatePipe.transform(this.params.startDate, 'yyyy-MM-dd');
    let end = this._DatePipe.transform(this.params.endDate, 'yyyy-MM-dd');
    let capacity = this.params.capacity;
    this._Router.navigate(['/landing-page/explore'], {
      queryParams: { startDate: start, endDate: end, capacity: capacity },
    });

  }
}
