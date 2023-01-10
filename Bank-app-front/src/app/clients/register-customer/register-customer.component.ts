import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/entities/client';
import { ClientService } from 'src/app/services/client/client.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent{
  client: Client = new Client();
  birthDateValue: Date;
  currentDate: Date;
  constructor(private clientService: ClientService, private router: Router){}

  ngOnInit(): void{
    this.currentDate = new Date();
    console.log(this.currentDate.toISOString().substring(0, 10))
  }

  onSubmit(): void{
    this.client.creationDate = this.currentDate.toISOString().substring(0, 10);
    this.client.modificationDate = this.client.creationDate;
    this.client.birthDate = this.birthDateValue.toISOString().substring(0, 10);
    this.client.userModification = this.client.userCreation;
    this.createClient();
    this.router.navigate(["/clients"])
    console.log(this.client)
  }

  createClient(): void{
    this.clientService.createClient(this.client).subscribe(newClient => {
        console.log(newClient);
    });
  }
}
