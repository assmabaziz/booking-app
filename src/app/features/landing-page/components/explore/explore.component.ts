import { Component } from '@angular/core';
import { ExploreService } from '../../services/explore.service';
import { IParamsRoom, IRoom } from '../../interfaces/iroom';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ShredDataService } from '../../../../shared/services/shred-data.service';
@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss',
})
export class ExploreComponent {
  constructor(
    private _ExploreService: ExploreService, 
    private _ToastrService: ToastrService,
    private _Router: Router,
    public _ShredDataService :ShredDataService
  ) {}
  roomsList: IRoom[] = [];
  startDate: Date | null = null;
  endDate: Date | null = null;
  pageIndex: number = 1;
  pageSize: number = 10;
  pageNumber: number = 1;
  totalCount: number = 0;
  params: IParamsRoom = {};
  roleUser: string | null = '';
  ngOnInit(): void {
    this.getAllRooms();
    if (localStorage) {
      this.roleUser = localStorage.getItem('userRole');
    }
  }
  getAllRooms() {
    if (this.startDate == null) {
      this.params = {
        page: this.pageNumber,
        size: this.pageSize,
      };
    } else if (this.startDate !== null) {
      this.params = {
        page: this.pageNumber,
        size: this.pageSize,
        startDate: this.startDate,
        endDate: this.endDate,
      };
    }
    this._ExploreService.onGetAllRooms(this.params).subscribe({
      next: (res) => {
        this.roomsList = res.data.rooms;
        this.totalCount = res.data.totalCount;
      },
    });
  }
  addRoomToFavorites(id: string) {
    console.log(id);
    this._ExploreService.onAddRoomToFav(id).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
        if (err.error.message === 'Unauthorized') {
        this._ToastrService.error('please login firstly', err.error.message);
          this._Router.navigate(['/auth/signin']);
        }
      },
      complete: () => {
        this._ToastrService.success('Room added to favorites successfully');
      },
    });
  }
  viewRoomDetails(id:string) {

  }
  handlePageEvent(e: any) {
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex + 1;
    this.getAllRooms();
  }

}
