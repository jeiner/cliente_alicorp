import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http: HttpClient) { }

  header = {
    headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization',  localStorage.getItem("token"))
  }


  ip= "http://192.168.1.130:8000";
  
  perfil = this.ip +"/perfil";



  listarDataPeril(){
    return this.http.get(this.perfil, this.header)

  }


  
}
