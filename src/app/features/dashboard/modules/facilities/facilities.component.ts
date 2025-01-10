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
    this.getAllFacilities();
  }

  getAllFacilities() {
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
        this.getAllFacilities()
      },
    })
  }
  handlePageEvent(e: PageEvent) {
    this.params.size = e.pageSize;
    this.params.page = e.pageIndex + 1;
    this.getAllFacilities();
  }
  FacilityDelete(data: IFacilities) {
    const dialogRef = this.dialog.open(DeleteItemComponent, {
      data: { text: 'Facility', id: data._id }
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
            this.getAllFacilities();
          },
          error: (err) => {
            console.log(err);
            this._ToastrService.error(err.error.message);
          },
        });
      }
    });
  }
  viewFacility(data: IFacilities) {
      const dialogRef = this.dialog.open(AddFacilitiesComponent, {
        data: {data:data,ReadOnly:true,name:data.name,type:'view'},
        width: '400px',
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log('The dialog was closed');
      });
  }
  editFacility(data:IFacilities){
    const dialogRef = this.dialog.open(AddFacilitiesComponent, {
          width: '400px',
          data: {data:data,ReadOnly:false,name:data.name },
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log(result,'hhh')
          if (result) {
            this._FacilitiesService.addFacility(result).subscribe({
              next:(res)=>{
                this.resMessage = res.message;
              },
              error:(err)=>{
                this._ToastrService.error(err.error.message);
              },
              complete:()=> {
                this._ToastrService.success(this.resMessage);
                this.getAllFacilities()
              },
            })
          }
        });
  }
}
