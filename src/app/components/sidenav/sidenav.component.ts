import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-sidenav',
  imports: [MatSidenavModule,FormsModule,RouterLink,MatIconModule,RouterLinkActive,RouterOutlet],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  open:boolean = false
}
