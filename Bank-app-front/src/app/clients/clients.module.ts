import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { ClientsDashboardComponent } from './clients-dashboard/clients-dashboard.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { FormsModule} from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListClientsComponent,
    ClientsDashboardComponent,
    RegisterCustomerComponent,
    ClientDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule
  ],
  exports: [
    ListClientsComponent,
    ClientsDashboardComponent
  ]
})
export class ClientsModule { }
