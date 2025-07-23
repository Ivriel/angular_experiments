import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService:AuthService, private router:Router){}
  feedbackLogin!:any;
  loginObj:any = {
    email:"",
    password:""
  }

  onLogin(){
    this.authService.sendLogin(this.loginObj).subscribe({
      next:(res:any)=> {
      if(res.accessToken != null) {
      this.feedbackLogin = res
      console.log(res)
      this.authService.saveAccessToken(res.accessToken)
      alert("Berhasil login")
      this.router.navigateByUrl("employee")
      } else {
        alert("Kredensial Salah")
      }
    },
    error:(err:any)=> {
      console.error("error login: ",err)
      alert("Gagal login")
    }
    })
  }
}
