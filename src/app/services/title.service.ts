import { inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  title = inject(Title)

  setTitle(title:string){
    this.title.setTitle(title)
  }
  
}
