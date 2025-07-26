import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  const authService = inject(AuthService)
  const router = inject(Router)

  if(req.url.includes("AGeneral/Login") || req.url.includes("AGeneral/Refreshtoken")) {
    return next(req)
  }

  const token = authService.getAccessToken()

  const newReq = req.clone({
    setHeaders:{
      Authorization: `Bearer ${token}`
    }
  })

  return next(newReq).pipe(
    catchError((error:HttpErrorResponse)=> {
      if(error.status === 401) {
        // coba refresh token
       return authService.refreshToken().pipe(
        switchMap((success)=> {
          if(success) {
            const newToken = authService.getAccessToken()
            const retryReq = req.clone({
              setHeaders:{
                Authorization:`Bearer ${newToken}`
              }
            })
            return next(retryReq)
          } else {
            authService.removeTokens()
            alert("Sesi anda telah berakhir. silahkan login kembali")
            router.navigateByUrl("login")
            return throwError(() => error)
          }
        })
       )
      }
      return throwError(()=> error)
    })
  )
};
