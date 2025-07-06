import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DialogExample2Component } from './dialog-example2/dialog-example2.component';
@Component({
  selector: 'app-dialog2',
  imports: [MatButtonModule],
  templateUrl: './dialog2.component.html',
  styleUrl: './dialog2.component.css'
})
export class Dialog2Component {
  
  public dialog = inject(MatDialog) // sama aja kaya constructor

  openDialog(){
   let dialogRef= this.dialog.open(DialogExample2Component,{data:{name:'Ivriel'}})
   dialogRef.afterClosed().subscribe(result=> {
    console.log(`Dialog Result: ${result}`)
   })
  }
}
