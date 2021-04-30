import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';





@Injectable({
  providedIn: 'root'
})
export class CiudadEstadoService {

  constructor(private http: HttpClient) { }


  getCiudad(){
    return this.http.get<any[]>('https://restcountries.eu/rest/v2/lang/es');
        }
}