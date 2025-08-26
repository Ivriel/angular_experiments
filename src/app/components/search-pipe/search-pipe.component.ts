import { Component } from '@angular/core';
import { FilterArrayPipe } from '../../pipes/filter-array.pipe';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-search-pipe',
  imports: [FilterArrayPipe,FormsModule],
  templateUrl: './search-pipe.component.html',
  styleUrl: './search-pipe.component.css'
})
export class SearchPipeComponent {
  searchQuery:string ="";
  studentSearch:string =  "";
  cityList:string[] = ["Pune","Mumbai","Panji","Nagpur","Solapur","Thane","Pune"]

  studentList:any[] = [
    {
      name:'AAAA',
      city:'Pune',
      isActive:false,
    },
    {
      name:'BB',
      city:'Mumbai',
      isActive:false,
    },
    {
      name:'CCC',
      city:'Dolakpur',
      isActive:true,
    },
    {
      name:'DDD',
      city:'Nagpur',
      isActive:false,
    },
  ]
}
