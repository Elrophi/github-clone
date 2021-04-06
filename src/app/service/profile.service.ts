import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, retry} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  username: string;
  repoName: string;
  clientId: string = "0da956e6044b7adf54fe";
  clientSecret: string = "d0cb2b52be3cb8c1e9e9df4cd62fa68bc3e77902";
  apikey:string='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';
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