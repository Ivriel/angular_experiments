import { Component, inject } from '@angular/core';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { SnackbarCustomContentComponent } from '../snackbar-custom-content/snackbar-content.component';
@Component({
  selector: 'app-snackbar',
  imports: [MatSnackBarModule,MatButtonModule],
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.css'
})
export class SnackbarComponent {
    snackbar = inject(MatSnackBar)

    openSnackBar(message:string,action:string){
      let snackBarRef=this.snackbar.open(message,action,{duration:2000})

      snackBarRef.afterDismissed().subscribe(()=> {
        console.log('The snackbar was dismissed')
      })
      snackBarRef.onAction().subscribe(()=> {
        console.log('The snackbar action was triggered')
      })
    }

    openCustomSnackBar(){
      this.snackbar.openFromComponent(SnackbarCustomContentComponent,{duration:2000})
    }
}
