import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/entities/client';
import { ClientService } from 'src/app/services/client/client.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent {
  clients: Client[];
  
  constructor(private clientService: ClientService, private router: Router){}

  ngOnInit(): void{
    this.findAllClients();
  }

  private findAllClients(){
    this.clientService.findAllClients().subscribe(client => {
      this.clients = client;
    });
  }

  clientDetails(id: Number){
    this.router.navigate(['client/details', id]);
  }
}
