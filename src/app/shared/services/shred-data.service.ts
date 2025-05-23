import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { IChangePassword } from '../../features/dashboard/modules/users-admin/interfaces/IusersAdmin';
import { Observable } from 'rxjs';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ShredDataService {
  textDir: string = '';
  constructor(
    private _HttpClient: HttpClient,
    public translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(platformId)) {
      if (localStorage.getItem('language')) {
        if (localStorage.getItem('language') === 'en') {
          this.textDir = 'ltr';
        } else {
          this.textDir = 'rtl';
        }
      }
    }
  }
  public myData = signal<any>('');
  public isViewMode = signal<boolean>(false);
  setData(newData: any) {
    this.myData.set(newData);
  }
  changePassword(data: IChangePassword): Observable<any> {
    return this._HttpClient.post('/api/v0/admin/users/change-password', data);
  }
  onchangeLanguage(language: string) {
    this.translate.setDefaultLang(language);
    this.translate.use(language);
    localStorage.setItem('language', language);
    console.log(language);
  }
}
