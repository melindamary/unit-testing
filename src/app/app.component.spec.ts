import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormComponent, AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'unit-testing'`, () => {
    expect(component.title).toEqual('unit-testing');
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('unit-testing');
  });

  it('should render the FormComponent', () => {
    const formComponent = fixture.debugElement.query(By.directive(FormComponent));
    expect(formComponent).toBeTruthy();
  });

  // Additional tests to ensure the FormComponent is integrated correctly
  it('should pass form values from FormComponent to parent', () => {
    const formComponent = fixture.debugElement.query(By.directive(FormComponent)).componentInstance as FormComponent;

    // Mock form values
    formComponent.signupForm.setValue({
      name: 'Test Name',
      email: 'test@example.com',
      password: 'securepassword',
      confirmPassword: 'securepassword'
    });

    // Spy on console.log to check
    spyOn(console, 'log');
    formComponent.onSubmit();
    expect(console.log).toHaveBeenCalledWith({
      name: 'Test Name',
      email: 'test@example.com',
      password: 'securepassword',
      confirmPassword: 'securepassword'
    });
  });
});
