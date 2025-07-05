import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {MatStepper, MatStepperModule} from '@angular/material/stepper';
@Component({
  selector: 'app-stepper',
  imports: [MatStepperModule,MatButtonModule,CommonModule],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css'
})
export class StepperComponent {
  isCompleted:boolean = false;
  isCompleted2:boolean = false

  completeStep2(stepper:MatStepper){
    this.isCompleted2 = true
    setTimeout(() => {
      stepper.next()
    });
  }
    currentStepIndex:number = 1; // misalnya posisi sekarang: "Dikirim"
    currentStep:number = 1;
    steps:{title:string;desc:string}[] = [
  { title: 'Dikemas', desc: 'Pesananmu sedang dikemas' },
  { title: 'Dikirim', desc: 'Paket sedang dalam perjalanan' },
  { title: 'Diterima', desc: 'Menunggu konfirmasi penerimaan' }
];
}
