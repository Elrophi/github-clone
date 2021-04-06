import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  username: string;
  repoName: string;
  clientId: string = "c789323b20a2d31dc9fa";
  clientSecret: string = "83e428e5ed1c99fded8ab02686753f74656f9f6b";
  apikey:string='be05ad82ef1dec303061648a172836e81613bc78';

  constructor(private http: HttpClient) { 
    console.log('service is now ready');
  }

  getUser() {
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
  }

  getUserRepos() {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos'+ "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
  }

  searchrepos() {
    return this.http.get('https://api.github.com/search/repositories?q=' + this.repoName, ({
      headers: new HttpHeaders({Authorization: `token ${this.apikey}`})
    }))
  }

  UpdateUser(username:string) {
    this.username = username;
  }

  UpdateRepo(repo:string) {
    this.repoName = repo;
  }
  
}
//PERSONAL_TOKENS = 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
//CLIENT-SECRET = d0cb2b52be3cb8c1e9e9df4cd62fa68bc3e77902
//CLIENT-ID = 0da956e6044b7adf54fe