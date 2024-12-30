import { Component, inject } from '@angular/core';
import { IFacilities, IRoom } from './interfaces/iroom';
import { RoomsService } from './services/rooms.service';
import { ToastrService } from 'ngx-toastr';
import { Iparams } from '../users-admin/interfaces/Iparams';
import { ShredDataService } from '../../../../shared/services/shred-data.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteItemComponent } from '../../../../shared/components/delete-item/delete-item.component';
import { Router } from '@angular/router';
import { ViewRoomComponent } from './components/view-room/view-room.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent {
  readonly dialog = inject(MatDialog);
  moduleName: string = 'rooms';
  dataSource!: IRoom[];
  displayedColumns: string[] = [
    'roomNumber',
    'images',
    'discount',
    'price',
    'facilities',
    'capacity',
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
  pageIndex: number = 0;
  pageSize: number = 5;
  pageNumber: number = 1;
  totalCount: number = 0;
  searchValue: string = '';
  roomsData: IRoom[] = [];
  facilities: IFacilities[] = [];
  capacityName: string = '';
  params = {
    page: 1,
    size: 5,
    roomNumber: this.searchValue,
    capacity: this.capacityName,
    facilityId: this.facilities,
  };
  constructor(
    private _RoomsService: RoomsService,
    private _ToastrService: ToastrService,
    private _ShredDataService : ShredDataService,
    private _Router: Router
  ) {}
  ngOnInit(): void {
    this.getAllRooms();
    this.getAllFacilies();
  }
  getAllRooms() {
    this._RoomsService.onGetAllRooms(this.params).subscribe({
      next: (res) => {
        this.roomsData = res.data.rooms;
        this.dataSource = res.data.rooms;
        this.totalCount = res.data.totalCount
        this.facilities = res.data.facilities
        console.log(res.data);
      },
      error: (err) => {
        // console.log(err);
      },complete : ()=> {
        this._ShredDataService.setData(this.facilities);
      }
    });
  }
  getAllFacilies() {
    this._RoomsService.onGetFacilities().subscribe({
      next: (res) => {
        this.facilities = res.data.facilities;
      },
      error: (err) => {
        // console.log(err);
      },
    });
  }
  deleteRoomById(data: IRoom) {
    const dialogRef = this.dialog.open(DeleteItemComponent, {
      data: data,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      console.log('The dialog was closed');
      if (result) {
        console.log(result);
        this._RoomsService.onDeleteRoomById(data._id).subscribe({
          next: (res) => {
            console.log(res);
            this._ToastrService.success(res.message);
            this.getAllRooms();
          },
          error: (err) => {
            console.log(err);
            this._ToastrService.error(err.error.message);
          },
        });
      }
    });
  }
  uppdateRoom(data:IRoom) {
    this._RoomsService.onEditRoom(data, data._id).subscribe({
      next: (res) => {},
        error: (err) => {
          this._ToastrService.error(err.error.message, 'failed');
        },
        complete: () => {
          this._Router.navigate(['/dashboard/rooms']);
          this._ToastrService.success('Rooms Updated Successfully');
        },
    })
  }
  viewRoom(data: IRoom) {
    const dialogRef = this.dialog.open(ViewRoomComponent, {
      width: '40%',
      data: {
        // rooms: this.rooms,
        // room: data.room._id,
        // discount: data.room.discount,
        // isActive: data.isActive,
        disable: true,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  handlePageEvent(e: any) {
    this.params.size = e.pageSize;
    this.params.page = e.pageIndex + 1;
    this.getAllRooms();
  }
}
