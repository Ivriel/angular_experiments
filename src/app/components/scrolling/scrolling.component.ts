import { Component } from '@angular/core';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scrolling',
  imports: [ScrollingModule,CommonModule],
  templateUrl: './scrolling.component.html',
  styleUrl: './scrolling.component.css'
})
export class ScrollingComponent {
  numbers:number[] = []
  constructor(){
    for(let i=0;i<1000; i++) {
      this.numbers.push(i)
    }
  }
} 
