import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-datepicker',
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    CommonModule,
    FormsModule
  ],
  standalone: true,
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.css'
})
export class DatepickerComponent {
  selectedDate: Date | null = null;
  
  // Min date: hari ini (tidak bisa pilih tanggal kemarin)
  minDate: Date = new Date();
  
  // Max date: 1 tahun dari sekarang
  maxDate: Date = new Date(new Date().getFullYear() + 1, new Date().getMonth(), new Date().getDate());

 dateFilter = (date: Date | null): boolean => {
  console.log('checking date:', date);
  if (!date) return false;
  const day = date.getDay();
  return day !== 0 && day !== 6; // senin sampai jumat aja yang bisa dipilih
};

  
}
