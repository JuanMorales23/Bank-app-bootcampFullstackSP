import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/entities/account';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-savings-account',
  templateUrl: './savings-account.component.html',
  styleUrls: ['./savings-account.component.css']
})
export class SavingsAccountComponent {
  accounts: Account[];

  constructor(private route: ActivatedRoute, private router: Router, private accountService: AccountService){}

  ngOnInit():void{
    this.findAllSavingsAccounts();
  }
  
  private findAllSavingsAccounts(){
    this.accountService.findAllAccountsByType("ca").subscribe(account => {
      this.accounts = account;
    });
  }

  accountDetails(accountNumber: Number){
    this.router.navigate(['accounts/details', accountNumber])
  }
}
