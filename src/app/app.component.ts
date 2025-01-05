import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hotel';
  constructor(private translate: TranslateService) {
    // translate.addLangs(['ar', 'en']);
    translate.setDefaultLang('en');
    translate.use('ar');
  }
}
