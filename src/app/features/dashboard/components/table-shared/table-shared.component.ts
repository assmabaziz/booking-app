import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ShredDataService } from '../../../../shared/services/shred-data.service';
import { IAds } from '../../modules/ads/interfaces/iads';
@Component({
  selector: 'app-table-shared',
  templateUrl: './table-shared.component.html',
  styleUrl: './table-shared.component.scss',
})
export class TableSharedComponent implements OnChanges {
  @Input() dataSource!: any;
  data!: any;
  myfacilities!: any;
  constructor(private _ShredDataService: ShredDataService) {}
  ngOnChanges(): void {
    this.data = new MatTableDataSource(this.dataSource);
    console.log(this.dataSource);
    // console.log(this._ShredDataService.myData);
    for (const element of this.dataSource) {
      this.myfacilities = element.facilities;
      console.log(this.myfacilities);
    }
  @Input() displayedColumns: string[] = [];
  @Input() actions: any[] = [];
  @Input() moduleName: string = '';
  @Output() AdsViewed = new EventEmitter<any>();
  @Output() AdsEdit = new EventEmitter<any>();
  @Output() AdsDelete = new EventEmitter<any>();
  onView(dataView: IAds) {
    this.AdsViewed.emit(dataView);
  }
  onEdit(dataEdit: IAds) {
    this.AdsEdit.emit(dataEdit);
  }
  onDelete(dataDelete: IAds) {
    this.AdsDelete.emit(dataDelete);
  }
}
