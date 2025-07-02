import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sidenav',
  imports: [MatSidenavModule,FormsModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  open:boolean = false
}
