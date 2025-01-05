import { ToastrService } from 'ngx-toastr';
import { PageEvent } from '@angular/material/paginator';
import { IAds } from './interfaces/iads';
import { AdsService } from './services/ads.service';
import { Component, inject, OnInit } from '@angular/core';
import { AddEditAdsComponent } from './components/add-edit-ads/add-edit-ads.component';
import { MatDialog } from '@angular/material/dialog';
import { IRoom } from '../rooms/interfaces/iroom';
import { DeleteItemComponent } from '../../../../shared/components/delete-item/delete-item.component';
import {
  IadsAddEdit,
  IadsDelete,
  IApiRespose,
} from '../../../../shared/interfaces/iapi-respose';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrl: './ads.component.scss',
})
export class AdsComponent implements OnInit {
  readonly dialog = inject(MatDialog);
  moduleName: string = 'Ads';
  dataSource!: IAds[];
  displayedColumns: string[] = [
    'userName',
    'roomNumber',
    'discount',
    'capacity',
    'price',
    'isActive',
    'actions',
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
  rooms: IRoom[] = [];
  flagRoom: boolean = false;

  constructor(
    private _AdsService: AdsService,
    private _ToastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllAds();
    this.getAllRooms();
  }

  getAllAds() {
    this._AdsService.getAllAds(this.params).subscribe({
      next: (res: IApiRespose<IAds>) => {
        // console.log(res);
        const key = Object.keys(res.data).find((k) =>
          Array.isArray(res.data[k])
        );
        const ads: IAds[] = key ? (res.data[key] as IAds[]) : [];
        // console.log(ads);

        this.numRows = res.data.totalCount;
        this.dataSource = ads;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getAllRooms() {
    this._AdsService.getAllRooms().subscribe({
      next: (res) => {
        console.log(res);
        const key = Object.keys(res.data).find((k) =>
          Array.isArray(res.data[k])
        );
        const rooms: IRoom[] = key ? (res.data[key] as IRoom[]) : [];
        console.log(rooms);

        this.rooms = rooms;
        this.flagRoom = true;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  handlePageEvent(e: PageEvent) {
    this.params.size = e.pageSize;
    this.params.page = e.pageIndex + 1;
    this.getAllAds();
  }
  viewAds(data: IAds) {
    const dialogRef = this.dialog.open(AddEditAdsComponent, {
      width: '40%',
      data: {
        rooms: this.rooms,
        room: data.room._id,
        discount: data.room.discount,
        isActive: data.isActive,
        disable: true,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  EditAds(data: IAds) {
    const dialogRef = this.dialog.open(AddEditAdsComponent, {
      width: '40%',
      data: {
        rooms: this.rooms,
        room: data.room._id,
        discount: data.room.discount,
        isActive: data.isActive,
        disable: false,
        edit: true,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result);
        delete result.rooms;
        delete result.disable;
        delete result.edit;
        delete result.room;
        console.log(result);
        this._AdsService.onUpdateAdsById(data._id, result).subscribe({
          next: (res: IApiRespose<IadsAddEdit>) => {
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
  addAds() {
    const dialogRef = this.dialog.open(AddEditAdsComponent, {
      width: '40%',
      data: {
        rooms: this.rooms,
        room: '',
        discount: '',
        isActive: '',
        disable: false,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result) {
        // console.log(result);
        delete result.rooms;
        delete result.disable;
        console.log(result);
        this._AdsService.onAddAds(result).subscribe({
          next: (res: IApiRespose<IadsAddEdit>) => {
            // console.log(res);
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
  AdsDelete(data: IAds) {
    const dialogRef = this.dialog.open(DeleteItemComponent, {
      data: { text: 'Ads', id: data._id }
    });
    dialogRef.afterClosed().subscribe((result) => {
      // console.log(result);
      console.log('The dialog was closed');
      if (result) {
        console.log(result);
        this._AdsService.onDeleteAdsById(data._id).subscribe({
          next: (res: IApiRespose<IadsDelete>) => {
            // console.log(res);
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
