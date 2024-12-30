import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ShredDataService } from '../../../../shared/services/shred-data.service';
@Component({
  selector: 'app-table-shared',
  templateUrl: './table-shared.component.html',
  styleUrl: './table-shared.component.scss',
})
export class TableSharedComponent implements OnChanges {
  @Input() dataSource!: any;
  @Input() displayedColumns: string[] = [];
  @Input() actions: any[] = [];
  @Input() moduleName: string = '';
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
  }
}
