import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/entities/client';
import { ClientService } from 'src/app/services/client/client.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent {
  idNumber: number;
  client: Client;
  birthDateValue: Date;
  currentDate: Date;

  constructor(private route: ActivatedRoute, private clientService: ClientService){}

  ngOnInit(): void{
    this.idNumber = this.route.snapshot.params['id'];
    this.client = new Client();
    this.clientService.findClientById(this.idNumber).subscribe(client => {
      this.client = client;
    })
  }

  onSubmit(){

  }
}
