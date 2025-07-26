import { Component, OnInit } from '@angular/core';
import { filter, from, interval, map, reduce, scan, take, tap } from 'rxjs';
import { FormsModule,NgForm } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-rxjs',
  imports: [FormsModule,MatPaginatorModule],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css'
})
export class RxjsComponent implements OnInit {
   obs = interval(1000).pipe(take(5),map((value)=> value+1)) // pancarkan value setiap 1 detik, diambil cuma 5 data , setiap data ditambah 1

   obs2 = interval(100).pipe(take(5),map((value=> value+1)), filter((value => value > 2)),tap(i=> console.log("Nilai awal +1: "+i))) // pancarkan value setiap 2 detik, ambil  5 data, tambahkan 1 masing masing, ambil yang lebih dari 2,  dan print ke console log

   obs3= interval(500).pipe(take(5))

   reduced = this.obs3.pipe(
    reduce((state,value)=> state+value,0)
   )

   obs4 = interval(500).pipe(take(5))
   scanObs = this.obs4.pipe(
    scan((state,value)=> state+value,0)
   )

   numbers=from([1,2,3,4,5])
   sumReduce = this.numbers.pipe(
    reduce((acc,val)=> acc+val,0)
   )

   cumulativeSum = this.numbers.pipe(
    scan((acc,val)=> acc+val,0)
   )

   ngOnInit(): void {
       console.log(this.cumulativeSum.subscribe(
        value => console.log("Cumulative Sum: "+value)
       )
      )
   }
}
