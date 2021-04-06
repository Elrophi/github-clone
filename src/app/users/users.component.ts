import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  public gitHubUserQuery!: string;
  constructor() { }

  public searchUser(){

  }

  ngOnInit(): void {
  }

}
