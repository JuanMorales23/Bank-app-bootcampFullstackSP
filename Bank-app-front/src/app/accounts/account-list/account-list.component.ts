import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent {
  accountType: String;
  cc: Boolean;
  ca: Boolean;
  constructor(private route: ActivatedRoute){}
  
  ngOnInit():void{
    this.ca = false;
    this.cc = false;
    this.accountType = this.route.snapshot.params['accountType'];
    if(this.accountType === "ca"){
      this.ca = true;
    }else{
      this.cc = true;
    }
  }

  
}
