import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DataService,User } from '../../../services/data.service';
@Component({
  selector: 'app-dialog-content',
  imports: [MatDialogModule,MatButtonModule,MatFormFieldModule,MatInputModule,ReactiveFormsModule],
  templateUrl: './dialog-content.component.html',
  styleUrl: './dialog-content.component.css'
})
export class DialogContentComponent implements OnInit {
  form!:FormGroup;
  constructor( private fb: FormBuilder,
    private dialogRef: MatDialogRef<DialogContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private dataService: DataService){
    
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      name: [this.data?.name || '', Validators.required],
      email: [this.data?.email || '', [Validators.required, Validators.email]]
    });
  }
  save() {
    if (this.form.invalid) return;
    const value = this.form.value;

    if (this.data?._id) {
      this.dataService.update(this.data._id, value).subscribe(() => this.dialogRef.close(true));
    } else {
      this.dataService.create(value).subscribe(() => this.dialogRef.close(true));
    }
  }

  close() {
    this.dialogRef.close();
  }

}
