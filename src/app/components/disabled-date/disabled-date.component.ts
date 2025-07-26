import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-disabled-date',
  imports: [CommonModule,FormsModule],
  templateUrl: './disabled-date.component.html',
  styleUrl: './disabled-date.component.css'
})
export class DisabledDateComponent implements OnInit{
  currentDate:Date = new Date()
  selecteddate:string = ""
  minDate:string = ""
  maxDate:string = ""

  ngOnInit(): void {
      this.initiateDate()
      this.rentangDate()
  }
  
  initiateDate(){
    const dateTimeNow = new Date()
    this.selecteddate = dateTimeNow.toISOString().split('T')[0]
    console.log(this.selecteddate)
  }

  rentangDate(){
    const today = new Date()
    const min = new Date()
    min.setDate(today.getDate() - 3) // 3 hari sebelumnya

    this.maxDate = today.toISOString().split('T')[0]
    this.minDate = min.toISOString().split('T')[0]
  }

  formatDate(){
    const preSubmitDate = new Date(this.selecteddate)

    const dd = String(preSubmitDate.getDate()).padStart(2,'0')
    const MM = String(preSubmitDate.getMonth() + 1).padStart(2,'0')
    const yyyy = String(preSubmitDate.getFullYear())

    const formattedDate = `${dd}/${MM}/${yyyy}`
    this.selecteddate = formattedDate
  }

  onSubmit(){
    this.formatDate()
    console.log(this.selecteddate)
  }
}
