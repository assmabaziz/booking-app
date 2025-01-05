import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ShredDataService } from '../../../../shared/services/shred-data.service';
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
  @Input() displayedColumns: string[] = [];
  @Input() actions: any[] = [];
  @Input() moduleName: string = '';
  @Output() AdsViewed = new EventEmitter<any>();
  @Output() AdsEdit = new EventEmitter<any>();
  @Output() AdsDelete = new EventEmitter<any>();
  @Output() roomsViewed = new EventEmitter<any>();
  @Output() usersViewed = new EventEmitter<any>();
  @Output() bookingViewed = new EventEmitter<any>();
  @Output() roomsEdit = new EventEmitter<any>();
  @Output() roomsDelte = new EventEmitter<any>();
  @Output() FacilityDelete = new EventEmitter<any>();
  ngOnChanges(): void {
    this.data = new MatTableDataSource(this.dataSource);
    this.data = new MatTableDataSource(this.dataSource);
  }
  onView(dataView: any) {
    switch (this.moduleName) {
      case 'rooms':
        this.roomsViewed.emit(dataView);
        break;
      case 'Ads':
        this.AdsViewed.emit(dataView);
        break;
      case 'facilities':
        break;
        case 'users':
        this.usersViewed.emit(dataView);
        break;
        case 'booking':
          this.bookingViewed.emit(dataView);
          break;
    }
  }
  onEdit(dataEdit: any) {
    switch (this.moduleName) {
      case 'rooms':
        this.roomsEdit.emit(dataEdit);
        break;
      case 'Ads':
        this.AdsEdit.emit(dataEdit);
        break;
      case 'facilities':
        break;
    }
  }
  onDelete(dataDelete: any) {
    switch (this.moduleName) {
      case 'rooms':
        this.roomsDelte.emit(dataDelete);
        break;
      case 'Ads':
        this.AdsDelete.emit(dataDelete);
        break;
      case 'Facilities':
        this.FacilityDelete.emit(dataDelete);
        break;
    }
  }
}
