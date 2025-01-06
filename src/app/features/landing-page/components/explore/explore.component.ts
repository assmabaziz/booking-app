import { Component } from '@angular/core';
import { ExploreService } from '../../services/explore.service';
import { IParamsRoom, IRoom } from '../../interfaces/iroom';
@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss',
})
export class ExploreComponent {
  constructor(private _ExploreService: ExploreService) {}
  roomsList: IRoom[] = [];
  startDate: Date | null = null;
  endDate: Date | null = null;
  pageIndex: number = 1;
  pageSize: number = 10;
  pageNumber: number  = 1;
  totalCount: number = 0;
  params : IParamsRoom  = {}
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
      };
    }
    this._ExploreService.onGetAllRooms(this.params).subscribe({
      next: (res) => {
        console.log(res);
        this.roomsList = res.data.rooms;
        this.totalCount = res.data.totalCount;
      },
    });
  }
  handlePageEvent(e: any) {
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex + 1;
    this.getAllRooms();
  }
}
