import { Component,OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/AuthService/auth.service';
import { UserStoreService } from 'src/app/services/UserStore/user-store.service';

@Component({
  selector: 'user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.css']
})
export class UserDropdownComponent implements OnInit {
  public Name:string="";
  isDropdownOpen: boolean = false; 


  constructor(private auth:AuthService,private userStore:UserStoreService) {}

  ngOnInit(): void {
    this.userStore.getNameFromStore()
    .subscribe(val=>{
      let nameFromToken=this.auth.getNameFromToken();
      this.Name=val || nameFromToken;
    })
  }

  toggleUserDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen; 
  }
  logout(){
    this.auth.logout();
  }

}
