import { Component } from '@angular/core';
import { IFacilities, IRoom } from './interfaces/iroom';
import { RoomsService } from './services/rooms.service';
import { ToastrService } from 'ngx-toastr';
import { Iparams } from '../users-admin/interfaces/Iparams';
import { ShredDataService } from '../../../../shared/services/shred-data.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent {
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
    private _ShredDataService : ShredDataService
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
  handlePageEvent(e: any) {
    this.params.size = e.pageSize;
    this.params.page = e.pageIndex + 1;
    this.getAllRooms();
  }
}
