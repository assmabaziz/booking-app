import { Component } from '@angular/core';
import { ExploreService } from '../../services/explore-service/explore.service';
import { IParamsRoom, IRoom } from '../../interfaces/iroom';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { ShredDataService } from '../../../../shared/services/shred-data.service';
import { MatDialog } from '@angular/material/dialog';
import { NonAuthorizedUserComponent } from '../../modules/home/components/non-authorized-user/non-authorized-user.component';
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
    public _ShredDataService :ShredDataService,
    public dialog: MatDialog,
    private _ActivatedRoute: ActivatedRoute
  ) {
    if (localStorage) {
      this.roleUser = localStorage.getItem('userRole');
    }
    this._ActivatedRoute.queryParams.subscribe((params) => {
      this.startDate = params['startDate'];
      this.endDate = params['endDate'];
      this.capacity = params['capacity'];
    });
  }
  roomsList: IRoom[] = [];
  startDate: Date | null = null;
  endDate: Date | null = null;
  capacity: number = 1;
  pageIndex: number = 1;
  pageSize: number = 10;
  pageNumber: number = 1;
  totalCount: number = 0;
  params: IParamsRoom = {};
  roleUser: string | null = '';
  ngOnInit(): void {
    this.getAllRooms();
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
        capacity: this.capacity,
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
    this._ExploreService.onAddRoomToFav(id).subscribe({
      next: (res) => {
        // console.log(res);
      },
      error: (err) => {
        this._ToastrService.error(err.error.message)
        console.log(err);
      },
      complete: () => {
        this._ToastrService.success('Room added to favorites successfully');
      },
    });
  }
  handlePageEvent(e: any) {
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex + 1;
    this.getAllRooms();
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(NonAuthorizedUserComponent, {
      width: '60%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  sayHi(roomId:string):void {
console.log(roomId);

  }
}
