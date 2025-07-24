import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{

  constructor(private authService: AuthService) { }
  employeeData!:any;

  ngOnInit(): void {
      this.authService.getEmployee().subscribe({
        next:(res:any)=> {
        this.employeeData = res;
        console.log(this.employeeData)
      },
      error:(err:any)=> {
        console.error("Error fetch employee: ",err)
      }
      })
  }

  onLogout(){
    this.authService.removeTokens()
  }

}
