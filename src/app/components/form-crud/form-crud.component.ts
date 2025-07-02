import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-crud',
  imports: [CommonModule,FormsModule],
  templateUrl: './form-crud.component.html',
  styleUrl: './form-crud.component.css'
})
export class FormCRUDComponent implements OnInit{

  constructor(private userService:UserService){}
  model:any={
    name:'',
    email:'',
    description:'',
    gender:'',
    services:[]
  }
  imageFile!:File;
  previewUrl:any;
  userData: any[] = []
  editId:number | null = null

  genders=['Male','Female']
  allServices = [
    {
      id:1,
      name:'Web Development'
    },
    {
      id:2,
      name:'Mobile Development'
    },
    {
      id:3,
      name:'Software Development'
    }
  ]

  ngOnInit(): void {
      this
  }

  onFileChange(event:any):void{
    const file = event.target.files[0]
    if(file) {
      this.imageFile = file
      const reader = new FileReader()
      reader.onload = ()=> (this.previewUrl = reader.result)
      reader.readAsDataURL(file)
    }
  }

  onChangeCheckBox(e:any):void{
    const id = e.target.value
    if(e.target.checked) {
      this.model.services.push(id)
    } else {
      this.model.services = this.model.services.filter((service:any)=>service !== id)
    }
  }

  submit(form: NgForm): void {
    if (form.invalid) return;

    const formData = new FormData();
    if (this.imageFile) formData.append('file', this.imageFile);
    formData.append('param', JSON.stringify(this.model));

    if (this.editId) {
      this.userService.update(this.editId, formData).subscribe(() => {
        this.resetForm(form);
        this.loadUsers();
      });
      
    } else {
      this.userService.create(formData).subscribe(() => {
        this.resetForm(form);
        this.loadUsers();
      });
    }
  }

   edit(user: any): void {
    this.model = {
      name: user.name,
      email: user.email,
      description: user.description,
      gender: user.gender,
      services: [...(user.services || [])]
    };
    this.editId = user._id;
    if (user.imagePath) {
      this.previewUrl = user.imagePath
    }
  }

  delete(id: number): void {
    if (confirm('Are you sure?')) {
      this.userService.delete(id).subscribe(() => this.loadUsers());
    }
  }

  resetForm(form: NgForm): void {
    form.resetForm();
    this.model = { name: '', email: '', description: '', gender: '', services: [] };
    this.previewUrl = null;
    this.editId = null;
    this.imageFile = undefined!;
  }

  loadUsers(): void {
    this.userService.getAll().subscribe(data => {
      this.userData = data.map(item => ({
        ...item,
         imageUrl: item.imagePath || null
      }));
    });
  }
}
