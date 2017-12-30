import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'gg-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
private profile: any[];
private repos :any[];
username:string;
  constructor(private profileservice : ProfileService) { 
   
  }
 searchProfile(){
   this.profileservice.updateProfile(this.username);
   this.profileservice.getProfileInfo().subscribe(profile => {
    this.profile = profile;
  });
  this.profileservice.getProfileRepos().subscribe(repos => {
    this.repos = repos;
  });
 }
  ngOnInit() {
  }

}
