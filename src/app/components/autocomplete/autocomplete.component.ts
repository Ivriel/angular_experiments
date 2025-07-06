import { Component, OnInit } from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable, startWith,map } from 'rxjs';

interface TechOption {
  name: string;
  description?: string;
}

@Component({
  selector: 'app-autocomplete',
  imports: [MatAutocompleteModule,MatFormFieldModule,MatInputModule,CommonModule,FormsModule,ReactiveFormsModule],
  standalone:true,
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.css'
})
export class AutocompleteComponent{
  options: TechOption[] = [
    { name: 'Angular', description: 'Framework by Google' },
    { name: 'React', description: 'Library by Facebook' },
    { name: 'Vue', description: 'Progressive Framework' },
    { name: 'TypeScript', description: 'Typed JavaScript' },
    { name: 'JavaScript', description: 'Programming Language' },
    { name: 'Node.js', description: 'Runtime Environment' },
    { name: 'Express', description: 'Web Framework' },
    { name: 'MongoDB', description: 'NoSQL Database' }
  ];
  
  myControl= new FormControl()
  selectedOption: string = "";
  filteredoptions!:Observable<string>;
  get filteredOptions(): TechOption[] {
    if (!this.selectedOption || this.selectedOption.trim() === '') {
      return this.options;
    }
    return this.options.filter(option =>
      option.name.toLowerCase().includes(this.selectedOption.toLowerCase())
    );
  }

}
