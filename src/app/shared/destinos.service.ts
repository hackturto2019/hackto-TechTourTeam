import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestinosService {

  API_URL = 'http://127.0.0.1:8000/api';
  htttphead = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http: HttpClient) { }

  getDestinos(): Observable<any> {
    return this.http.get(this.API_URL + '/destinos/',{headers: this.htttphead});
  }

  buscarTodosDestinos(filtro) {
    return this.http.get(this.API_URL + '/destinos/?search=' + filtro,{headers: this.htttphead});
  }
}
