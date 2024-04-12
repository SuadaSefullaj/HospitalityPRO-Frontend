import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
private Name$ = new BehaviorSubject<string>("");
private Role$ = new BehaviorSubject<string>("");

constructor() { }

  public getRoleFromStore(){
    return this.Role$.asObservable();
  }

  public setRoleForStore(role:string){
    this.Role$.next(role);
  }

  public getNameFromStore(){
    return this.Name$.asObservable();
  }

  public setNameForStore(name:string){
    this.Name$.next(name)
  }
}