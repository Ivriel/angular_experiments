import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl:string = "https://api.com"
  constructor(private http:HttpClient) { }

  getAll():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl)
  }

  create(formData:FormData):Observable<any>{
    return this.http.post<any>(this.apiUrl,formData)
  }

  update(id:number,formData:FormData):Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/${id}`,formData)
  }

  delete(id:number):Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`)
  }
}
