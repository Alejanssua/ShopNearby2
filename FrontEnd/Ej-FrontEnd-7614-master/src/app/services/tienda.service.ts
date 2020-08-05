import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tienda } from '../models/tienda';
import {Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  url : string = "https://localhost:44344/api/Tienda";

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'      
    })
  };

  constructor(private http:HttpClient) { }

  save(a:Tienda) : Observable<any> {
    let tiendaBody = JSON.stringify(a);    
    if(a.idTienda === undefined){      
      return this.http.post<any>(this.url, tiendaBody, this.httpOptions);
    }
    return this.http.put<any>(this.url, tiendaBody, this.httpOptions);
  }

  retrieve(id:number): Observable<Tienda> {
    return this.http.get<Tienda>(this.url + "/" + id, this.httpOptions)
      .pipe(
        retry(1)
      );
  } 

  delete(a: Tienda) : Observable<any> {
    return this.http.delete<any>(this.url + '/' + a.idTienda, 
      this.httpOptions);
  }

  list(): Observable<Tienda[]> {
    return this.http.get<Tienda[]>(this.url, this.httpOptions)
      .pipe(
        retry(1)
      );
  }


}
