import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';
export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const authService = inject(AuthService)

  return authService.checkTokenValidity().pipe(
    map(isTokenValid => {
      if (isTokenValid) {
        return true
      } else {
        authService.removeAccessToken()
        alert("Sesi sudah berakhit atay tifak valid. silahkan login kembali")
        router.navigate(['/login'])
        return false
      }
    })
  )
};
