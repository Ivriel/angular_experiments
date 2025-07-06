import { Component } from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-tooltip',
  imports: [MatTooltipModule,MatButtonModule],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.css'
})
export class TooltipComponent {

}
