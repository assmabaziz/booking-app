import { Component, inject, Input, OnInit } from '@angular/core';
import { AuthService } from '../../../features/auth/services/auth.service';
import { ProfileComponent } from '../profile/profile.component';
import { MatDialog } from '@angular/material/dialog';
import { IProfile } from '../../interfaces/iprofile';
import { UppdatePasswordComponent } from '../uppdate-password/uppdate-password.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  public dialog = inject(MatDialog);
  @Input() profileData!: IProfile | null;
  constructor(private _AuthService: AuthService) {}
  ngOnInit(): void {
    this._AuthService.getProfieDetails().subscribe({
      next: (res) => {
        this.profileData = res.data.user;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  logout() {
    this._AuthService.onLogout();
  }
  showProfile() {
    const dialogRef = this.dialog.open(ProfileComponent, {
      width: '45%',
      data: this.profileData,
    });
  }
  openDialogCahngePassword() {
    const dialogRef = this.dialog.open(UppdatePasswordComponent, {
      width: '40%',
    });
  }
}
