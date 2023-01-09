import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/entities/client';
import { ClientService } from 'src/app/services/client/client.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent{
  client: Client = new Client();
  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

  constructor(private clientService: ClientService, private router: Router){}

  ngOnInit(): void{
    console.log(this.date.value)
  }

  onSubmit(): void{
    this.createClient();
  }

  createClient(): void{
    this.clientService.createClient(this.client).subscribe(newClient => {
        console.log(newClient);
    });
  }
}
