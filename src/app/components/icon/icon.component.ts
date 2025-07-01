import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';

@Component({
  selector: 'app-icon',
  imports: [MatIconModule,MatBadgeModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
notifications:number = 5
}
