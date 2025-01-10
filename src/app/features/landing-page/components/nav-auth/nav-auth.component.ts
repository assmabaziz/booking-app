import { Component, inject } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { IProfile } from '../../../../shared/interfaces/iprofile';
import { UppdatePasswordComponent } from '../../../../shared/components/uppdate-password/uppdate-password.component';
import { ProfileComponent } from '../../../../shared/components/profile/profile.component';
import { ShredDataService } from '../../../../shared/services/shred-data.service';

@Component({
  selector: 'app-nav-auth',
  templateUrl: './nav-auth.component.html',
  styleUrl: './nav-auth.component.scss',
})
export class NavAuthComponent {
  constructor(
    private _AuthService: AuthService,
    public _ShredDataService: ShredDataService
  ) {}
  public dialog = inject(MatDialog);
  profileData!: IProfile | null;
  userRole: any;
  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('userToken')) {
        this._AuthService.getProfieDetails().subscribe({
          next: (res) => {
            // console.log(res);
            this.profileData = res.data.user;
          },
          error: (err) => {
            console.log(err);
          },
        });
        this.userRole = this._AuthService.role;
      }
    }
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
  changeLanguage(language: string) {
    this._ShredDataService.onchangeLanguage(language);
  }

}
