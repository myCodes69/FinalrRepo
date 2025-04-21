import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, skip, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 private base_url = 'https://jsonplaceholder.typicode.com'
 public sub = new BehaviorSubject('Any')
 public obs$ = this.sub.asObservable()
 public settings :string = 'cross comp shareable'
  constructor(private http:HttpClient) { }
  fetchdata():Observable<any>{
    return this.http.get(`${this.base_url}/users`,{headers:{skip:'not true'}})
  }
}
