import { Component } from '@angular/core';
import { NgxGalaxyComponent } from "@omnedia/ngx-galaxy";
import { NgxTypewriterComponent } from '@omnedia/ngx-typewriter';
import { NgxMarqueeComponent } from '@omnedia/ngx-marquee';

@Component({
  selector: 'app-galaxy',
  imports: [NgxGalaxyComponent,NgxTypewriterComponent,NgxMarqueeComponent],
  templateUrl: './galaxy.component.html',
  styleUrl: './galaxy.component.css'
})
export class GalaxyComponent {
  words:string[] = ['Check','Again','Hello']
}
