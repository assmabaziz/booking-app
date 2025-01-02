import { Component, Input } from '@angular/core';
import { IProfile } from '../../shared/interfaces/iprofile';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  isSidebarClosed = false;

  profileImage: string | undefined = '';
  profileData!: IProfile;
  constructor(private _AuthService: AuthService) {
    this._AuthService.getProfieDetails().subscribe({
      next: (res) => {
        console.log(res);
        this.profileData = res.data.user;
        this.profileImage = this.profileData.profileImage;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }
}
