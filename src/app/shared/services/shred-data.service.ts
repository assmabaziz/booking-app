import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShredDataService {

  constructor() { }
  public myData = signal<any>('');

  setData(newData: any) {
    this.myData.set(newData);
  }
}
