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
export class TableSharedComponent {
  @Input() dataSource: any[] = [];
  @Input() displayedColumns: string[] = [];
  @Input() actions: any[] = [];
  @Input() moduleName: string = '';
  @Output() AdsViewed = new EventEmitter<any>();
  @Output() AdsEdit = new EventEmitter<any>();
  @Output() AdsDelete = new EventEmitter<any>();

  constructor() {}

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
