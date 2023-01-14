import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/entities/client';
import { ClientService } from 'src/app/services/client/client.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent {
  idNumber: String;
  client: Client;
  currentDate: Date;
  edit: Boolean;
  disabled: Boolean;
  title: String[] = ['Eliminar usuario', 'Guardar cambios'];
  message: String[] = ['Está seguro que desea eliminar el usuario?', 'Está seguro que desea guardar los cambios?'];
  confirm: Boolean;
  constructor(private route: ActivatedRoute, private router: Router, private clientService: ClientService){}

  ngOnInit(): void{
    this.edit = false;
    this.disabled = true;
    this.confirm = false;
    this.currentDate = new Date();
    this.idNumber = this.route.snapshot.params['id'];
    this.client = new Client();
    this.clientService.findClientById(this.idNumber).subscribe(client => {
      this.client = client;
    })
    this.client.modificationDate = this.currentDate.toISOString().substring(0, 10);
  }

  onSubmit(){
    this.saveClient();
    this.disabled = !this.disabled;
    this.edit = !this.edit;
  }

  modifyClient(): void{
    this.edit = !this.edit;
    this.disabled = !this.disabled;
  }

  deleteClient(): void{
    if(this.confirm){
      this.clientService.deleteClientByIdNumber(this.client.idNumber).subscribe(object => {
        this.goBack();
      });
    }
  }

  goBack(): void{
    this.router.navigate(['clients']);
  }

  saveClient(): void{
    this.clientService.modifyClient(this.client.idNumber, this.client).subscribe(response => {
      this.goBack();
    });
  }

  receiveOption(event: Boolean){
    this.confirm = event;
    this.deleteClient();
  }
}
