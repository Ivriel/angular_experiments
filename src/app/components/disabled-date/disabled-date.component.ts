import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-disabled-date',
  imports: [CommonModule],
  templateUrl: './disabled-date.component.html',
  styleUrl: './disabled-date.component.css'
})
export class DisabledDateComponent {
  currentDate:Date = new Date()

  // dapatkan tanggal hari Minggu di minggu ini
  getStartOfWeek(date:Date):Date { // dapetin tanggal hari Minggu di minggu ini
    const day = date.getDay(),
     diff = date.getDate() - day + (day == 0 ? -6 : 0) // kalau hari minggu (0),mundur 6 hari
    const startOfWeek = new Date(date.setDate(diff))
    return startOfWeek
  }

  // hitung tanggal hari minggu dan hari ini
  startOfWeek:Date = this.getStartOfWeek(this.currentDate)// hari minggu di minggu ini
  endDate:Date = this.currentDate; // tanggal hari ini

  // tentukan min dan max Date yang bisa dipilih
  minDate:string = this.getStartOfWeek(this.currentDate).toISOString().split('T')[0] // 20 juli (batas minggu kode ini dibuat)
  maxDate:string = this.currentDate.toISOString().split('T')[0] // 23 juli (hari kode ini dibuat)
}
