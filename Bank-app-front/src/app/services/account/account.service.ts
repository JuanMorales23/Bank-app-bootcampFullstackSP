import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/entities/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  private url:String = "http://localhost:8080/accounts";

  findAllClients(): Observable<Account[]>{
    return this.httpClient.get<Account[]>(`${this.url}`);
  }
}
