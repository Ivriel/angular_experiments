import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }

  getData(){
    const data = [
      {
        id:1,
        name:'John Doe',
        email:'john@expamle.com',
        role:'Admin'
      },
      {
        id:2,
        name:'Tony Stark',
        email:'tony@expamle.com',
        role:'User'
      },
      {
        id:3,
        name:'Viceroy Keroy',
        email:'viceroy@gmail.com',
        role:'Admin'
      },
      {
        id:4,
        name:'Vansie Nancy',
        email:'Vancy@example.com',
        role:'User'
      },
      {
        id:5,
        name:'Duelo Yelo',
        email:'duelo@example.com',
        role:'Admin'
      },
      {
        id:6,
        name:'Quenzo Yelo',
        email:'john@expamle.com',
        role:'User'
      },
      {
        id:7,
        name:'Huvuvee',
        email:'osas@gmail.com',
        role:'User'
      },
      {
        id:8,
        name:'Admin',
        email:'admin@example.com',
        role:'Admin'
      },
      {
        id:9,
        name:'User',
        email:'useras@gmail.com',
        role:'User'
      },
      {
        id:10,
        name:'Huhu haha',
        email:'haha@expamle.com',
        role:'Admin'
      },
    ]
    return of(data)
  }
}
