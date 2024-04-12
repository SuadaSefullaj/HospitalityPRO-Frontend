
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/AuthService/auth.service';
import { ApiService } from 'src/app/services/ApiService/api.service';
import { UserStoreService } from 'src/app/services/UserStore/user-store.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public clients:any = [];
  public role!:string;
  constructor(private api : ApiService, private auth: AuthService, private userStore:UserStoreService) { }

  ngOnInit() {
    this.api.getClients()
    .subscribe(res=>{
    this.clients = res;
    });

    this.userStore.getRoleFromStore()
    .subscribe(val=>{
      const roleFromToken=this.auth.getRoleFromToken();
      this.role=val || roleFromToken;
    })

  }

}
