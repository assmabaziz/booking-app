import { Room } from './../../../dashboard/modules/ads/interfaces/iads';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icomment } from '../../interfaces/iroom';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private _HttpClient: HttpClient) { }
  onGetAllRoomComments(roomId:string):Observable<any> {
    return this._HttpClient.get(`/api/v0/portal/room-comments/${roomId}`)
  }
  onAddComment(data:Icomment):Observable<any> {
    return this._HttpClient.post(`/api/v0/portal/room-comments`,data)
  }
  onRemoveComment(roomId:string):Observable<any> {
    return this._HttpClient.delete(`/api/v0/portal/room-comments/${roomId}`)
  }
  onUppdateComment(data:string, roomId : string):Observable<any> {
    return this._HttpClient.patch(`/api/v0/portal/room-comments/${roomId}`, data)

  }
}
