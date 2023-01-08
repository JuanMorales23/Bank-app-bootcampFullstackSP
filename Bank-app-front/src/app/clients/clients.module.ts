import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { ClientsDashboardComponent } from './clients-dashboard/clients-dashboard.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';


@NgModule({
  declarations: [
    ListClientsComponent,
    ClientsDashboardComponent,
    RegisterCustomerComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ListClientsComponent,
    ClientsDashboardComponent
  ]
})
export class ClientsModule { }
