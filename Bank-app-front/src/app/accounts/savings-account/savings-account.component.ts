import { Component } from '@angular/core';
import { Account } from 'src/app/entities/account';

@Component({
  selector: 'app-savings-account',
  templateUrl: './savings-account.component.html',
  styleUrls: ['./savings-account.component.css']
})
export class SavingsAccountComponent {
  accounts: Account[];

  constructor(){}

  ngOnInit():void{
    
  }
  
  accountDetails(idNumber: Number){

  }
}
