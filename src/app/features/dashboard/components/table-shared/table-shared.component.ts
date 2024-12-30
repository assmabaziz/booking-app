import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IAds } from '../../modules/ads/interfaces/iads';
@Component({
  selector: 'app-table-shared',
  templateUrl: './table-shared.component.html',
  styleUrl: './table-shared.component.scss',
})
export class TableSharedComponent implements OnChanges {
  @Input() dataSource: any[] = [];
  @Input() displayedColumns: string[] = [];
  @Input() actions: any[] = [];
  @Input() moduleName: string = '';
  @Output() AdsViewed = new EventEmitter<any>();
  @Output() AdsEdit = new EventEmitter<any>();
  data!: any;

  constructor() {}
  ngOnChanges(): void {
    // console.log(this.dataSource, this.displayedColumns);
    this.data = new MatTableDataSource(this.dataSource);
  }
  onView(dataView: IAds) {
    this.AdsViewed.emit(dataView);
  }
  onEdit(dataView: IAds) {
    this.AdsEdit.emit(dataView);
  }
}
