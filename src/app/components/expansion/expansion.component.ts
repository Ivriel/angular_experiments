import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-expansion',
  imports: [MatExpansionModule,MatButtonModule],
  templateUrl: './expansion.component.html',
  styleUrl: './expansion.component.css'
})
export class ExpansionComponent {

}
