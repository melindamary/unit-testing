// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { FormComponent } from './form.component';
// import { ReactiveFormsModule } from '@angular/forms';
// import { By } from '@angular/platform-browser';

// describe('FormComponent', () => {
//   let component: FormComponent;
//   let fixture: ComponentFixture<FormComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       // declarations: [FormComponent],
//       imports: [FormComponent,ReactiveFormsModule]
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(FormComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('form should be invalid when empty', () => {
//     expect(component.signupForm.valid).toBeFalsy();
//   });

//   it('name field validity', () => {
//     let errors;
//     let name = component.signupForm.controls['name'];
//     expect(name.valid).toBeFalsy();

//     // Name field is required
//     errors = name.errors || {};
//     expect(errors['required']).toBeTruthy();

//     // Set name to valid value
//     name.setValue('Test Name');
//     errors = name.errors || {};
//     expect(errors['required']).toBeFalsy();
//   });

//   it('email field validity', () => {
//     let errors;
//     let email = component.signupForm.controls['email'];
//     expect(email.valid).toBeFalsy();

//     // Email field is required
//     errors = email.errors || {};
//     expect(errors['required']).toBeTruthy();

//     // Set invalid email
//     email.setValue('invalid-email');
//     errors = email.errors || {};
//     expect(errors['email']).toBeTruthy();

//     // Set valid email
//     email.setValue('test@example.com');
//     errors = email.errors || {};
//     expect(errors['email']).toBeFalsy();
//   });

//   it('password field validity', () => {
//     let errors;
//     let password = component.signupForm.controls['password'];
//     expect(password.valid).toBeFalsy();

//     // Password field is required
//     errors = password.errors || {};
//     expect(errors['required']).toBeTruthy();

//     // Set invalid password (less than 6 characters)
//     password.setValue('12345');
//     errors = password.errors || {};
//     expect(errors['minlength']).toBeTruthy();

//     // Set valid password
//     password.setValue('securepassword');
//     errors = password.errors || {};
//     expect(errors['minlength']).toBeFalsy();
//   });

//   it('confirmPassword field validity', () => {
//     let confirmPassword = component.signupForm.controls['confirmPassword'];
//     expect(confirmPassword.valid).toBeFalsy();

//     // Set valid confirm password (same as password)
//     component.signupForm.controls['password'].setValue('securepassword');
//     confirmPassword.setValue('securepassword');
//     expect(component.signupForm.valid).toBeTruthy();

//     // Set invalid confirm password (different from password)
//     confirmPassword.setValue('differentpassword');
//     expect(component.signupForm.valid).toBeFalsy();
//   });

//   it('should emit toggle event on calling onToggle', () => {
//     spyOn(component.toggle, 'emit');
//     component.onToggle();
//     expect(component.toggle.emit).toHaveBeenCalled();
//   });

//   it('submitting the form', () => {
//     expect(component.signupForm.valid).toBeFalsy();
//     component.signupForm.controls['name'].setValue('Test Name');
//     component.signupForm.controls['email'].setValue('test@example.com');
//     component.signupForm.controls['password'].setValue('securepassword');
//     component.signupForm.controls['confirmPassword'].setValue('securepassword');
//     expect(component.signupForm.valid).toBeTruthy();

//     // Trigger form submission
//     let compiled = fixture.nativeElement;
//     compiled.querySelector('form').dispatchEvent(new Event('ngSubmit'));
//     fixture.detectChanges();

//     // Expect console log to have been called with the form value
//     spyOn(console, 'log');
//     component.onSubmit();
//     expect(console.log).toHaveBeenCalledWith(component.signupForm.value);
//   });
// });


import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // declarations: [FormComponent],
      imports: [ReactiveFormsModule,FormComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid when empty', () => {
    expect(component.signupForm.valid).toBeFalsy();
  });

  it('name field validity', () => {
    let errors;
    let name = component.signupForm.controls['name'];
    expect(name.valid).toBeFalsy();

    // Name field is required
    errors = name.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set name to valid value
    name.setValue('Test Name');
    errors = name.errors || {};
    expect(errors['required']).toBeFalsy();
  });

  it('email field validity', () => {
    let errors;
    let email = component.signupForm.controls['email'];
    expect(email.valid).toBeFalsy();

    // Email field is required
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set invalid email
    email.setValue('invalid-email');
    errors = email.errors || {};
    expect(errors['email']).toBeTruthy();

    // Set valid email
    email.setValue('test@example.com');
    errors = email.errors || {};
    expect(errors['email']).toBeFalsy();
  });

  it('password field validity', () => {
    let errors;
    let password = component.signupForm.controls['password'];
    expect(password.valid).toBeFalsy();

    // Password field is required
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set invalid password (less than 6 characters)
    password.setValue('12345');
    errors = password.errors || {};
    expect(errors['minlength']).toBeTruthy();

    // Set valid password
    password.setValue('securepassword');
    errors = password.errors || {};
    expect(errors['minlength']).toBeFalsy();
  });

  it('confirmPassword field validity', () => {
    let errors;
    let confirmPassword = component.signupForm.controls['confirmPassword'];
    expect(confirmPassword.valid).toBeFalsy();

    // Set invalid confirm password (different from password)
    confirmPassword.setValue('differentpassword');
    errors = confirmPassword.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set valid confirm password (same as password)
    component.signupForm.controls['password'].setValue('securepassword');
    confirmPassword.setValue('securepassword');
    errors = confirmPassword.errors || {};
    expect(errors['required']).toBeFalsy();

    expect(component.signupForm.valid).toBeTruthy();
  });

  it('should emit toggle event on calling onToggle', () => {
    spyOn(component.toggle, 'emit');
    component.onToggle();
    expect(component.toggle.emit).toHaveBeenCalled();
  });

  it('submitting the form', () => {
    expect(component.signupForm.valid).toBeFalsy();
    component.signupForm.controls['name'].setValue('Test Name');
    component.signupForm.controls['email'].setValue('test@example.com');
    component.signupForm.controls['password'].setValue('securepassword');
    component.signupForm.controls['confirmPassword'].setValue('securepassword');
    expect(component.signupForm.valid).toBeTruthy();

    // Spy on console.log before triggering form submission
    spyOn(console, 'log');

    // Trigger form submission
    component.onSubmit();

    expect(console.log).toHaveBeenCalledWith(component.signupForm.value);
  });
});
