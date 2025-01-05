import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { IChangePassword } from '../../features/dashboard/modules/users-admin/interfaces/IusersAdmin';
import { Observable } from 'rxjs';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class ShredDataService {
  textDir:string='ltr';
  constructor(private _HttpClient: HttpClient, public translate:TranslateService) {
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      if(event.lang==='en'){
        this.textDir='ltr'
      }
      else{
        this.textDir='rtl'
      }
    });
  }
  public myData = signal<any>('');
  public isViewMode = signal<boolean>(false);
  setData(newData: any) {
    this.myData.set(newData);
  }
  changePassword(data: IChangePassword): Observable<any> {
    return this._HttpClient.post('/api/v0/admin/users/change-password', data);
  }
  onchangeLanguage(language:string){
    this.translate.setDefaultLang(language);
    this.translate.use(language);
    localStorage.setItem('language', language)
  }
}
