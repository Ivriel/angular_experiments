import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
@Component({
  selector: 'app-button',
  imports: [MatButtonModule,MatButtonToggleModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class ButtonComponent {

}
