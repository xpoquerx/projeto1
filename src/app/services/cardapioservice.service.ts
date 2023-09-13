import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cardapio } from '../home/pages/cardapio/cardapio';

@Injectable({
  providedIn: 'root'
})
export class CardapioserviceService {

  private apiUrl = 'http://localhost:3000/cardapio'

  constructor(private http: HttpClient) { }

  getAll(): Observable <Cardapio[]>{
    return this.http.get<Cardapio[]>(this.apiUrl)


  }
}
