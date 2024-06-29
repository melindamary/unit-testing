import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // declarations: [FormComponent],
      imports: [ReactiveFormsModule,FormComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the form with 4 controls', () => {
    expect(component.signupForm.contains('name')).toBeTruthy();
    expect(component.signupForm.contains('email')).toBeTruthy();
    expect(component.signupForm.contains('password')).toBeTruthy();
    expect(component.signupForm.contains('confirmPassword')).toBeTruthy();
  });

  it('should make the name control required', () => {
    let control = component.signupForm.get('name');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });

  it('should make the email control required and validate email format', () => {
    let control = component.signupForm.get('email');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();

    control?.setValue('invalidEmail');
    expect(control?.valid).toBeFalsy();
  });

  it('should make the password control required and validate min length', () => {
    let control = component.signupForm.get('password');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();

    control?.setValue('12345');
    expect(control?.valid).toBeFalsy();

    control?.setValue('123456');
    expect(control?.valid).toBeTruthy();
  });

  it('should make the confirmPassword control required', () => {
    let control = component.signupForm.get('confirmPassword');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });

  it('should emit toggle event on calling onToggle', () => {
    spyOn(component.toggle, 'emit');

    component.onToggle();

    expect(component.toggle.emit).toHaveBeenCalled();
  });

  it('should log form value on submit', () => {
    spyOn(console, 'log');
    
    component.signupForm.setValue({
      name: 'Test User',
      email: 'test@example.com',
      password: '123456',
      confirmPassword: '123456'
    });

    component.onSubmit();

    expect(console.log).toHaveBeenCalledWith(component.signupForm.value);
  });

  it('should disable the submit button if the form is invalid', () => {
    component.signupForm.get('name')?.setValue('');
    fixture.detectChanges();

    const submitButton: HTMLButtonElement = debugElement.query(By.css('.signup-btn')).nativeElement;
    expect(submitButton.disabled).toBeTruthy();
  });
});
