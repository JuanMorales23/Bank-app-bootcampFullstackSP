import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsDashboardComponent } from './accounts-dashboard/accounts-dashboard.component';
import { CheckingAccountComponent } from './checking-account/checking-account.component';
import { SavingsAccountComponent } from './savings-account/savings-account.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AccountsDashboardComponent,
    CheckingAccountComponent,
    SavingsAccountComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AccountsModule { }
