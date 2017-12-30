import { Injectable } from '@angular/core';
import { Http , Headers } from "@angular/http";
import "rxjs/add/operator/map"
@Injectable()
export class ProfileService {


  private username:String;
  private client_id ='b3961348c449f3af360e';
  private client_secret ='586a7fa6edfa35e11e9ce958212df5ee25d8182c';

  constructor(private http:Http) { 
    //this.username= 'pr-1';

  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.client_id + "&client_secret=" + this.client_secret)
    .map(res => res.json());
  }
 getProfileRepos(){
  return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.client_id + "&client_secret=" + this.client_secret)
    .map(res => res.json());
 }
 updateProfile(username:string){
   this.username=username;
 }
}
