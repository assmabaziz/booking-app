import { Component } from '@angular/core';
import { IBooking } from './interfaces/booking';
import { MatDialog } from '@angular/material/dialog';
import { BookingService } from './services/booking.service';
import { PageEvent } from '@angular/material/paginator';
import { ViewBookingComponent } from './components/view-booking/view-booking.component';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {
 moduleName: string = 'booking';
  dataSource!: IBooking[];
  displayedColumns: string[] = [
    'user',
    'room',
    'startDate',
    'endDate',
    'totalPrice',
    'actions',
  ];
  actions: any[] = [
    {
      name: 'View',
      icon: 'visibility',
    },
  ];
  params = {
    page: 1,
    size: 5,
  };
  numRows!: number;
  constructor(private dialog: MatDialog,private _BookingService: BookingService) {}
  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers() {
    this._BookingService.getAllBooking(this.params).subscribe({
      next: (res) => {
        console.log(res,'booking');
        this.dataSource = res.data.booking;
        this.numRows = res.data.totalCount;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  handlePageEvent(e: PageEvent) {
    this.params.size = e.pageSize;
    this.params.page = e.pageIndex + 1;
    this.getAllUsers();
  }
  openViewDialog(item: IBooking): void {
    console.log(item,'lll')
    const dialogRef = this.dialog.open(ViewBookingComponent, {
      width: '35%',
      data: { item },
    });
    dialogRef.afterClosed().subscribe();
  }
}
