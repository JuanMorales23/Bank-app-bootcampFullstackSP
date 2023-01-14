import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsComponent } from './accounts/account-details/account-details.component';
import { AccountListComponent } from './accounts/account-list/account-list.component';
import { AccountsDashboardComponent } from './accounts/accounts-dashboard/accounts-dashboard.component';
import { CheckingAccountComponent } from './accounts/checking-account/checking-account.component';
import { SavingsAccountComponent } from './accounts/savings-account/savings-account.component';
import { AppComponent } from './app.component';
import { ClientDetailsComponent } from './clients/client-details/client-details.component';
import { ClientsDashboardComponent } from './clients/clients-dashboard/clients-dashboard.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },{
    path: 'clients', 
    component: ClientsDashboardComponent
  },{
    path: 'client/details/:id',
    component: ClientDetailsComponent
  },
  {
    path: 'accounts',
    component: AccountsDashboardComponent
  },
  {
    path: 'accounts/:accountType',
    component: AccountListComponent
  },{
    path: 'accounts/details/:accountNumber',
    component: AccountDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
