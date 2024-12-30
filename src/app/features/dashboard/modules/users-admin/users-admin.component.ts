import { Component, OnInit } from '@angular/core';
import { UsersAdminService } from './services/users-admin.service';
import { IusersAdmin } from './interfaces/IusersAdmin';
import { PageEvent } from '@angular/material/paginator';
import { IAds } from '../ads/interfaces/iads';
import { take } from 'rxjs';
@Component({
  selector: 'app-users-admin',
  templateUrl: './users-admin.component.html',
  styleUrl: './users-admin.component.scss',
})
export class UsersAdminComponent {
  moduleName: string = 'users';
  dataSource!: IusersAdmin[];
  displayedColumns: string[] = [
    'userName',
    'profileImage',
    'email',
    'phoneNumber',
    'country',
    'role',
    'verified',
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
  constructor(private _UsersAdminService: UsersAdminService) {}
  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers() {
    this._UsersAdminService.getAllUser(this.params).subscribe({
      next: (res) => {
        console.log(res);
        this.dataSource = res.data.users;
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
}
