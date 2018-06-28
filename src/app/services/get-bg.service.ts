import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BgArray } from '../objects/BgArray';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class GetBgService {
  getBgUrl = 'https://piky.herokuapp.com/';
  constructor(private http : HttpClient) { }
  getBg(): Observable<BgArray>{
    return this.http.get<BgArray>(this.getBgUrl + 'jessica');
  }
  getImgs(query) {
    return this.http.post<BgArray>(this.getBgUrl + 'images',{"query":query});
  }
}
