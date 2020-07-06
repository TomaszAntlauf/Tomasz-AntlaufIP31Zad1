import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import {IPotwory} from './ipotwory'


@Injectable({
    providedIn: 'root'
  })
  export class PotworyServerService {
    private url = "https://localhost:44372/";
  paginator: any;
  
    constructor(private http: HttpClient) {
  
    }
  
    public getPotwory(filters?: string, orderBy?: string): Observable<IPotwory[]> {
    //
    console.log(orderBy);
    console.log(filters);
    let params=new HttpParams();
    if(filters){
      params=params.append("filtr",filters);
    }
    if(orderBy){
      params=params.append("sort",orderBy);
    }
// argumenty
      return this.http.get<IPotwory[]>(this.url + 'Potwory', {params:params});
    }

    public getOnePotwory(id: number): Observable<IPotwory> {
      return this.http.get<IPotwory>(this.url + 'Potwory/' + id);
    }
  
    public deletePotwory(id: number): Observable<boolean> {
      return this.http.delete<boolean>(this.url + 'Potwory/' + id);
    }
  
    public updatePotwory(id: number, pot: IPotwory): Observable<boolean> {
      return this.http.put<boolean>(this.url + 'Potwory/' + id, pot);
    }
  
    public postPotwory(pot: IPotwory): Observable<boolean> {
      return this.http.post<boolean>(this.url + 'Potwory', pot);
    }
  }
  