import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [MatButtonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'experiments';
}
