import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/entities/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient: HttpClient) { }

  private url:String = "http://localhost:8080/clients";

  findAllClients(): Observable<Client[]>{
    return this.httpClient.get<Client[]>(`${this.url}`);
  }

  createClient(client: Client): Observable<Object>{
    return this.httpClient.post(`${this.url}`, client);
  }
}
