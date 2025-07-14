import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
interface ContactForm {
  name:string;
  email:string;
  phone:string;
  message:string;
}
@Component({
  selector: 'app-send-email',
  imports: [FormsModule],
  templateUrl: './send-email.component.html',
  styleUrl: './send-email.component.css'
})
export class SendEmailComponent {

  formObj:ContactForm = {
    name:"",
    email:"",
    phone:"",
    message:""
  }

  send(){
    console.log(this.formObj)
    emailjs.send('service_n6rttx4','template_fq7byqf',{...this.formObj},{
      publicKey:'_nac3SZMiBttFjja8'
    }).then(()=> {
      console.log("Sended")
    })
  }
}
