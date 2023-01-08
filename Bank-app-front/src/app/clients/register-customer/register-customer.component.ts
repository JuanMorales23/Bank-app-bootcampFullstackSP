import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/entities/client';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit{
  client: Client;

  constructor(){}

  ngOnInit(): void{
    
  }

  onSubmit(): void{
    console.log(this.client)
  }
}
