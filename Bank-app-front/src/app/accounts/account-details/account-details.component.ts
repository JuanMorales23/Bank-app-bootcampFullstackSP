import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/entities/account';
import { Client } from 'src/app/entities/client';
import { AccountService } from 'src/app/services/account/account.service';
import { ClientService } from 'src/app/services/client/client.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent {
  accountNumber: String;
  accountType: String;
  account: Account;
  currentDate: Date;
  edit: Boolean;
  disabled: Boolean;
  confirm: Boolean;
  idOwner: String;
  client: Client;
  title: String[] = ['Eliminar usuario', 'Guardar cambios'];
  message: String[] = ['Está seguro que desea eliminar el usuario?', 'Está seguro que desea guardar los cambios?'];

  constructor(private route: ActivatedRoute, private router: Router, private accountService: AccountService, private clientService: ClientService){}

  ngOnInit(): void{
    this.idOwner = "";
    this.edit = false;
    this.disabled = true;
    this.confirm = false;
    this.currentDate = new Date();
    this.accountNumber = this.route.snapshot.params['accountNumber'];
    this.accountType = this.route.snapshot.params['accountType'];
    this.account = new Account();
    this.client = new Client();
    this.accountService.findAccountByNumber(this.accountNumber).subscribe(account => {
      this.account = account;
      this.idOwner = account.idOwner;
    })
    this.getClient()
  }

  onSubmit(){

  }

  getClient(): void{
    this.clientService.findClientById(this.idOwner).subscribe(client => {
      this.client = client;
    })
  }
  modifyAccount(){

  }
  
  goBack(){

  }

  receiveOption(event: Boolean){
    this.confirm = event;
    
  }
}
