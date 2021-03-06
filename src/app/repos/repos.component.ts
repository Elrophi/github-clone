import { ProfileService } from './../service/profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  repoitems: any[];
  repoName:string= "akan";

  constructor(private profileService: ProfileService) { 
    
  }

  findRepo () {
    this.profileService.UpdateRepo(this.repoName);
    this.profileService.searchrepos().subscribe(repo => {
      // console.log(repo["items"]);
      this.repoitems = repo["items"];
      console.log(this.repoitems);
    })
  }

  ngOnInit() {
    this.findRepo()
  }


}
