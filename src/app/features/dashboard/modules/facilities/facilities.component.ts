import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { IFacilities } from './interfaces/IFacilities';
import { FacilitiesService } from './services/Facilities.service';
import { MatDialog } from '@angular/material/dialog';
import { AddFacilitiesComponent } from './components/add-facilities/add-facilities.component';
import { ToastrService } from 'ngx-toastr';
import { DeleteItemComponent } from '../../../../shared/components/delete-item/delete-item.component';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrl: './facilities.component.scss'
})
export class FacilitiesComponent {
moduleName: string = 'Facilities';
resMessage = '';
  dataSource!: IFacilities[];
  displayedColumns: string[] = [
    'name',
    'createdBy',
    'createdAt',
    'updatedAt',
    'actions'
  ];
  actions: any[] = [
    {
      name: 'View',
      icon: 'visibility',
    },
    {
      name: 'Edit',
      icon: 'edit',
    },
    {
      name: 'Delete',
      icon: 'delete',
    },
  ];
  params = {
    page: 1,
    size: 5,
  };
  numRows!: number;

  constructor(private _FacilitiesService: FacilitiesService, public dialog : MatDialog ,private _ToastrService:ToastrService) {}

  ngOnInit(): void {
    this.getAllAds();
  }

  getAllAds() {
    this._FacilitiesService.getAllFacilities(this.params).subscribe({
      next: (res) => {
        console.log(res);
        this.numRows = res.data.totalCount;
        this.dataSource = res.data.facilities;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddFacilitiesComponent, {
      data:  {name:''},
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.addFacility(result)
      }
    });
  }
  addFacility(facility:string){
    this._FacilitiesService.addFacility(facility).subscribe({
      next:(res)=>{
        this.resMessage = res.message;
      },
      error:(err)=>{
        this._ToastrService.error(err.error.message);
      },
      complete:()=> {
        this._ToastrService.success(this.resMessage);
        this.getAllAds()
      },
    })
  }
  handlePageEvent(e: PageEvent) {
    this.params.size = e.pageSize;
    this.params.page = e.pageIndex + 1;
    this.getAllAds();
  }
  FacilityDelete(data: IFacilities) {
    const dialogRef = this.dialog.open(DeleteItemComponent, {
      data: data,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      console.log('The dialog was closed');
      if (result) {
        console.log(result);
        this._FacilitiesService.onDeleteFacility(data._id).subscribe({
          next: (res) => {
            console.log(res);
            this._ToastrService.success(res.message);
            this.getAllAds();
          },
          error: (err) => {
            console.log(err);
            this._ToastrService.error(err.error.message);
          },
        });
      }
    });
  }
}
