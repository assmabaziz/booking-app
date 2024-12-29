import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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
  data!: any;

  constructor() {}
  ngOnChanges(): void {
    // console.log(this.dataSource, this.displayedColumns);
    this.data = new MatTableDataSource(this.dataSource);
  }
}
