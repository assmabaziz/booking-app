import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Output, PLATFORM_ID } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss',
})
export class ChartsComponent {
  chartOptionsBooking: any;
  chartOptionsUsers: any;
  isBrowser: boolean;
  pending: number = 0;
  completed: number = 0;
  user: number = 0;
  admin: number = 0;
  // @Output() ads = new EventEmitter<any>();
  // @Output() facilities = new EventEmitter<any>();
  // @Output() rooms = new EventEmitter<any>();

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private _DashboardService: DashboardService
  ) {
    this.isBrowser = isPlatformBrowser(platformId); // Ensures this runs only in the browser
    if (this.isBrowser) {
      this.fetchChartData();
    }
  }
  fetchChartData(): void {
    this._DashboardService.getleftSideChart().subscribe({
      next: (res) => {
        // this.ads.emit(res.data.ads);
        // this.rooms.emit(res.data.rooms);
        // this.facilities.emit(res.data.facilities);
        this.pending = res.data.bookings.pending;
        this.completed = res.data.bookings.completed;
        this.user = res.data.users.user;
        this.admin = res.data.users.admin;
        this.chartOptionsBooking = {
          title: {
            left: 'center',
          },
          tooltip: {
            trigger: 'item',
          },

          series: [
            {
              name: 'Tasks',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center',
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '18',
                  fontWeight: 'bold',
                },
              },
              labelLine: {
                show: false,
              },
              data: [
                { value: res.data.bookings.pending, name: 'Pending' },
                { value: res.data.bookings.completed, name: 'Completed' },
              ],
            },
          ],
        };

        this.chartOptionsUsers = {
          title: {
            left: 'center',
          },
          tooltip: {
            trigger: 'item',
          },

          series: [
            {
              name: 'Tasks',
              type: 'pie',
              radius: ['62%', '70%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center',
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '18',
                  fontWeight: 'bold',
                },
              },
              labelLine: {
                show: false,
              },
              data: [
                { value: res.data.users.user, name: 'User' },
                { value: res.data.users.admin, name: 'Admin' },
              ],
            },
          ],
        };
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
