import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/entities/account';
import { Client } from 'src/app/entities/client';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  private url:String = "http://localhost:8080/accounts";

  findAllAccounts(): Observable<Account[]>{
    return this.httpClient.get<Account[]>(`${this.url}`);
  }

  findAllAccountsByType(type: String): Observable<Account[]>{
    return this.httpClient.get<Account[]>(`${this.url}/${type}`)
  }

  findAccountByNumber(accountNumber: String): Observable<Account>{
    return this.httpClient.get<Account>(`${this.url}/${accountNumber}`);
  }

}
