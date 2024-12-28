import { Component, OnInit } from '@angular/core';
import { UsersAdminService } from './services/users-admin.service';

@Component({
  selector: 'app-users-admin',
  templateUrl: './users-admin.component.html',
  styleUrl: './users-admin.component.scss'
})
export class UsersAdminComponent{
  constructor(private _UsersAdminService:UsersAdminService){}
  ngOnInit(): void {
    this.getAllUsers()
  }
  getAllUsers(){
    const params = {
      page: 1,
      size: 10,
    };
    this._UsersAdminService.getAllUsers(params).subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
}
