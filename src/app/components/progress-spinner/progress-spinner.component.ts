import { Component } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-progress-spinner',
  imports: [MatProgressSpinnerModule,CommonModule,MatToolbarModule],
  templateUrl: './progress-spinner.component.html',
  styleUrl: './progress-spinner.component.scss'
})
export class ProgressSpinnerComponent {
  showSpinner: boolean = false

  loadData(){
    this.showSpinner = true
    setTimeout(() => {
      this.showSpinner = false
    }, 5000);
  }
}
