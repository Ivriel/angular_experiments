import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-example2',
  imports: [MatDialogModule,MatButtonModule],
  templateUrl: './dialog-example2.component.html',
  styleUrl: './dialog-example2.component.css'
})
export class DialogExample2Component implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data:any){}
  ngOnInit(): void {
    
  }
}
