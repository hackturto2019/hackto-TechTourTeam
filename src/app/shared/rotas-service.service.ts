import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RotasServiceService {
  API_URL = 'http://127.0.0.1:8000/api';
  htttphead = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http: HttpClient) { }

  getRotas(): Observable<any> {
    return this.http.get(this.API_URL + '/rotas/',{headers: this.htttphead});
  }

  filtrarRotas(filtro): Observable<any> {
    return this.http.get(this.API_URL + '/rotas/?search=' + filtro,{headers: this.htttphead});
  }
}
