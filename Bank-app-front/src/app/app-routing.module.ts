import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    path: 'accounts/savings-account',
    component: SavingsAccountComponent
  },{
    path: 'accounts/checking-account',
    component: CheckingAccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
