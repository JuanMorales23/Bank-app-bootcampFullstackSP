import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListClientsComponent } from './list-clients/list-clients.component';



@NgModule({
  declarations: [
    ListClientsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListClientsComponent
  ]
})
export class ClientsModule { }
