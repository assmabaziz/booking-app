import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  chartOptions: any;
  isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private _DashboardService: DashboardService
  ) {
    this.isBrowser = isPlatformBrowser(platformId); // Ensures this runs only in the browser

    if (this.isBrowser) {
      this.chartOptions = {
        title: {
          text: 'Task Status',
          left: 'center',
        },
        tooltip: {
          trigger: 'item',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
        },
        series: [
          {
            name: 'Tasks',
            type: 'pie',
            radius: ['40%', '70%'], // Inner and outer radius for doughnut effect
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
              { value: 136, name: 'Pending' },
              { value: 51, name: 'Completed' },
            ],
          },
        ],
      };
    }
  }

  ngOnInit(): void {
    this._DashboardService.getleftSideChart().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
