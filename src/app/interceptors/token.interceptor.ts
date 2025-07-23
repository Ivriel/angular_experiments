import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { catchError, throwError } from 'rxjs';
export const tokenInterceptor: HttpInterceptorFn = (req, next) => {


  const router = inject(Router)
  const cookieService = inject( CookieService );

  if(req.url.includes("AGeneral/Login")) {
    return next(req)
  }

  const token = cookieService.get('accessToken')

  const newReq = req.clone({
    setHeaders:{
      Authorization: `Bearer ${token}`
    }
  })

  return next(newReq).pipe(
    catchError((error:HttpErrorResponse)=> {
      if(error.status === 401) {
        router.navigate(['/login'])
        cookieService.delete('accessToken','/')
        alert("Sesi anda telah berakhir. silahkan login kembali")
      }
      return throwError(()=> error)
    })
  )
};
