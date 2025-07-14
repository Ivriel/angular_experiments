import { Component, inject, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { TitleService } from '../../services/title.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-button',
  imports: [MatButtonModule,MatButtonToggleModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class ButtonComponent {

  titleService = inject(TitleService)
  http = inject(HttpClient)

  constructor(){
    this.http.get("https://backend.pypup.com/api/problems/fetch/add-numbers").subscribe((res:any)=> {
        this.titleService.setTitle(res.result.title)
    })
  }
}
