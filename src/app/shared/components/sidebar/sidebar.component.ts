import { Component, Input } from '@angular/core';
import { AuthService } from '../../../features/auth/services/auth.service';

interface IMenu {
  name: string;
  icon: string;
  link: string;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Input() isClosed!: boolean;
  sidebarList: IMenu[] = [
    {
      name: 'Home',
      icon: 'fa-solid fa-house',
      link: '/dashboard/home',
    },
    {
      name: 'Users',
      icon: 'fa-solid fa-user-group',
      link: '/dashboard/users-admin',
    },

    {
      name: 'Rooms',
      icon: 'fa-solid fa-table-cells',
      link: '/dashboard/rooms',
    },

    {
      name: 'Ads',
      icon: 'fa-solid fa-user-group',
      link: '/dashboard/booking',
    },
    {
      name: 'Facilities',
      icon: 'fa-solid fa-newspaper',
      link: '/dashboard/facilities',
    }
  ];

  constructor(private _AuthService: AuthService) {}

  logout() {
    this._AuthService.onLogout();
  }
}
