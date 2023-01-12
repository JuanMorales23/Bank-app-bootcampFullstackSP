import { Component } from '@angular/core';
import { Account } from 'src/app/entities/account';

@Component({
  selector: 'app-checking-account',
  templateUrl: './checking-account.component.html',
  styleUrls: ['./checking-account.component.css']
})
export class CheckingAccountComponent {
  accounts: Account[];

  constructor(){}

  ngOnInit():void{
    
  }
  
  accountDetails(idNumber: Number){

  }
}
