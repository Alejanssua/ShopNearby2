import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Propietario } from '../models/propietario';
import {Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {

  url : string = "https://localhost:44344/api/Propietario";

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'      
    })
  };

  constructor(private http:HttpClient) { }

  save(a:Propietario) : Observable<any> {
    let propietarioBody = JSON.stringify(a);    
    if(a.idPropietario === undefined){      
      return this.http.post<any>(this.url, propietarioBody, this.httpOptions);
    }
    return this.http.put<any>(this.url, propietarioBody, this.httpOptions);
  }

  retrieve(id:number): Observable<Propietario> {
    return this.http.get<Propietario>(this.url + "/" + id, this.httpOptions)
      .pipe(
        retry(1)
      );
  } 

  delete(a: Propietario) : Observable<any> {
    return this.http.delete<any>(this.url + '/' + a.idPropietario, 
      this.httpOptions);
  }

  list(): Observable<Propietario[]> {
    return this.http.get<Propietario[]>(this.url, this.httpOptions)
      .pipe(
        retry(1)
      );
  }


}
