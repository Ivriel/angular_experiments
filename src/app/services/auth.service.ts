import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';
import { catchError, map, Observable, of, tap } from 'rxjs';
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

  saveTokens(accessToken:string,refreshToken:string){
    const secureFlag = environment.production
    this.cookieService.set('accessToken',accessToken,{
      secure:secureFlag, // ini true atau false nya 
      sameSite:'Strict',
      path:'/' // biar bisa diakses di semua halaman
    })
    this.cookieService.set('refreshToken',refreshToken,{
      secure:secureFlag,
      sameSite:'Strict',
      path:'/'
    })
  }

  getAccessToken(){
    return this.cookieService.get('accessToken');
  }

  getRefreshToken(){
    return this.cookieService.get('refreshToken')
  }

  removeTokens(){
    this.cookieService.delete('accessToken','/');
    this.cookieService.delete('refreshToken','/')
  }

  refreshToken():Observable<boolean> {
    const refreshToken= this.getRefreshToken()
    if(!refreshToken) {
      return of(false)
    }

    return this.http.post<any>(`${environment.refreshTokenApi}`,{refreshtoken: refreshToken}).pipe(
      tap(res => {
        this.saveTokens(res.accessToken,res.refreshToken)
      }),
      map(()=> true),
      catchError(()=> of(false)
    )
  )
  }

  getEmployee(){
    return this.http.get(`${environment.employeeApi}`)
  }
}
