import { Component } from '@angular/core';
import { Client } from 'src/app/entities/client';
import { ClientService } from 'src/app/services/client/client.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent {
  clients: Client[];
  
  constructor(private clientService: ClientService){}

  ngOnInit(): void{
    this.findAllClients();
  }

  private findAllClients(){
    this.clientService.findAllClients().subscribe(client => {
      this.clients = client;
    });
  }
}
