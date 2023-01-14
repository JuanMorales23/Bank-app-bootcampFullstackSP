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

  findClientById(idNumber: String): Observable<Client>{
    return this.httpClient.get<Client>(`${this.url}/${idNumber}`);
  }

  deleteClientByIdNumber(idNumber: Number): Observable<Object>{
    return this.httpClient.delete<Object>(`${this.url}/${idNumber}`)
  }

  modifyClient(idNumber: Number, client: Client): Observable<Boolean>{
    return this.httpClient.put<Boolean>(`${this.url}/${idNumber}`, client);
  }
}
