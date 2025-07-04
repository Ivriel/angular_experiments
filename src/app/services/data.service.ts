import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  _id?:string;
  name:string;
  email:string;
  image?:string; // buat jadi base 64 imagenya
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private apiUrl:string = "https://crudcrud.com/api/299f330db7dd48eaa304e90e81d1ae86/users"
  constructor(private http:HttpClient) { }

  getAll():Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl)
  }
  create(user:User): Observable<User>{
    return this.http.post<User>(this.apiUrl,user)
  }
  update(id:string,user:User): Observable <any>{
    const {_id, ...userData} = user
    return this.http.put(`${this.apiUrl}/${id}`,userData)
  }
  delete(id:string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
}
