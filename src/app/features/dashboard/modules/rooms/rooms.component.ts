import { Component } from '@angular/core';
import { IFacilities, IRoom } from './interfaces/iroom';
import { RoomsService } from './services/rooms.service';
import { ToastrService } from 'ngx-toastr';
import { Iparams } from '../users-admin/interfaces/Iparams';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent {
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
  };
  constructor(
    private _RoomsService: RoomsService,
    private _ToastrService: ToastrService
  ) {}
  ngOnInit(): void {
    this.getAllRooms();
    this.getAllFacilies();
  }
  getAllRooms() {
    let params = {
      page: this.pageNumber,
      size: this.pageSize,
      roomNumber: this.searchValue,
      capacity: this.capacityName,
      facilityId: this.facilities,
    };
    this._RoomsService.onGetAllRooms(params).subscribe({
      next: (res) => {
        this.roomsData = res.data.rooms;
        this.totalCount = res.data.totalCount
        this.facilities = res.data.facilities
        console.log(res);


      },
      error: (err) => {
        // console.log(err);
      },
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
