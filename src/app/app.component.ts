import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { SidenavComponent } from './components/sidenav/sidenav.component';
@Component({
  selector: 'app-root',
  imports: [SidenavComponent,MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'experiments';
}
