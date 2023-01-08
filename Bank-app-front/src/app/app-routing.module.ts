import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsDashboardComponent } from './clients/clients-dashboard/clients-dashboard.component';
import { RegisterCustomerComponent } from './clients/register-customer/register-customer.component';

const routes: Routes = [
  {path: 'clients', component: ClientsDashboardComponent},
  {path: 'clients/register', component: RegisterCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
