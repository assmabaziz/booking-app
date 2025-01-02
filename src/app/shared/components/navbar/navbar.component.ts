import { Component, inject, Input, OnInit } from '@angular/core';
import { AuthService } from '../../../features/auth/services/auth.service';
import { ProfileComponent } from '../profile/profile.component';
import { MatDialog } from '@angular/material/dialog';
import { IProfile } from '../../interfaces/iprofile';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  readonly dialog = inject(MatDialog);
  @Input() profileData!: IProfile | null;

  constructor(private _AuthService: AuthService) {
    // this._AuthService.getProfieDetails().subscribe({
    //   next: (res) => {
    //     console.log(res);
    //     this.profileData = res.data.user;
    //     this.profileImage = this.profileData.profileImage;
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });
  }

  ngOnChanges(): void {
    console.log(this.profileData);
  }

  ngOnInit(): void {}
  logout() {
    this._AuthService.onLogout();
  }
  showProfile() {
    const dialogRef = this.dialog.open(ProfileComponent, {
      width: '45%',
      // height: '50%',
      data: this.profileData,
    });
  }
}
