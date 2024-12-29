import { PageEvent } from '@angular/material/paginator';
import { IAds } from './interfaces/iads';
import { AdsService } from './services/ads.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrl: './ads.component.scss',
})
export class AdsComponent implements OnInit {
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

  constructor(private _AdsService: AdsService) {}

  ngOnInit(): void {
    this.getAllAds();
  }

  getAllAds() {
    this._AdsService.getAllAds(this.params).subscribe({
      next: (res) => {
        console.log(res);
        this.numRows = res.data.totalCount;
        this.dataSource = res.data.ads;
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
}
