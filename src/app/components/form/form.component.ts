import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: 'form.component.html',
  styleUrl: 'form.component.scss',
  providers: [DatePipe]
})
export class FormComponent {

  signupForm!: FormGroup;
  @Output() toggle = new EventEmitter<void>();

  onToggle() {
    this.toggle.emit();
  }

  onSubmit():void{
    console.log(this.signupForm.value);
  }

  ngOnInit():void{
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required,]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required]),
      
    })
  
  }
}
