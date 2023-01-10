import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { AlertModalComponent } from './alert-modal/alert-modal.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AlertModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    AlertModalComponent
  ]
})
export class SharedModule { }
