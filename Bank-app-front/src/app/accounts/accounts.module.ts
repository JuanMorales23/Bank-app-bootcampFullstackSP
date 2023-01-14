import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsDashboardComponent } from './accounts-dashboard/accounts-dashboard.component';
import { CheckingAccountComponent } from './checking-account/checking-account.component';
import { SavingsAccountComponent } from './savings-account/savings-account.component';
import { RouterModule } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AccountsDashboardComponent,
    CheckingAccountComponent,
    SavingsAccountComponent,
    AccountListComponent,
    AccountDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule
  ]
})
export class AccountsModule { }
