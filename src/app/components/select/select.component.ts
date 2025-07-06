import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
@Component({
  selector: 'app-select',
  imports: [MatSelectModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {
  selectedValue!:string;
}
