import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';
import { catchError, map, Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient,
    private cookieService:CookieService,
    private router:Router
  ) { }

  sendLogin(data:any) {
    return this.http.post(`${environment.loginApi}`,data)
  }

  saveAccessToken(token:string){
    this.cookieService.set('accessToken',token,{
      secure:environment.production, // ini true atau false nya 
      sameSite:'Strict',
      path:'/' // biar bisa diakses di semua halaman
    })
  }

  getAccessToken(){
    return this.cookieService.get('accessToken');
  }

  removeAccessToken(){
    this.cookieService.delete('accessToken');
    this.router.navigateByUrl("login")
  }

  checkTokenValidity():Observable<boolean>{
    const token = this.getAccessToken()
    if(!token) {
      return of(false)
    }

    return this.http.post(`${environment.checkTokenApi}`,{}).pipe(
      map(()=> true),
      catchError(()=> of(false))
    )
  }

  getEmployee(){
    return this.http.get(`${environment.employeeApi}`)
  }
}
