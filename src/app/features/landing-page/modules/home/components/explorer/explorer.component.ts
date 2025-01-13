import { Component } from '@angular/core';
import { ShredDataService } from '../../../../../../shared/services/shred-data.service';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrl: './explorer.component.scss'
})
export class ExplorerComponent {
  constructor( public _ShredDataService :ShredDataService){}
  personNumber=0
  changeCount(count:number){
    if(count >= 1){
      this.personNumber = count
    }
  }
}
