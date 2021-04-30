import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { registroModel } from '../Models/registro.model';
import { EnvioEmailModel } from '../Models/email.model';


@Injectable({
  providedIn: 'root'
})
export class RegistroServiceService {

  private UrlRegistro = 'https://localhost:5001/api/info';
  private UrlSendEmail = 'https://localhost:5001/api/EnviarCorreo';

  constructor(private http: HttpClient) { }

  CreateRegistro(registroN: registroModel): Observable<any>{
    return this.http.post(`${this.UrlRegistro}`, registroN);
  }

  ActualizarRegistro(registroAc: registroModel): Observable<any>{

    // const registroTep = {
    //   ...registroAc
    // };

    // delete registroTep.idPersona;

    return this.http.put(`${this.UrlRegistro}/${registroAc.idPersona}`, registroAc);
  }

  enviarEmail(emailM: EnvioEmailModel): Observable<any>{
    return this.http.post(`${this.UrlSendEmail}`, emailM);
  }
}
