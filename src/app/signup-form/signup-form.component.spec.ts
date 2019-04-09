import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignupFormComponent } from './signup-form.component';

describe('SignupFormComponent', () => {
  let component: SignupFormComponent;
  let fixture: ComponentFixture<SignupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupFormComponent ],
      imports: [ FormsModule, ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFormComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid if empty', () => {
    expect(component.signupForm.valid).toBeFalsy();
  });

  it('should require valid email field', () => {
    const email = component.signupForm.controls['email'];
    expect(email.valid).toBeFalsy();

    email.setValue('myemail@example.com');
    expect(email.valid).toBeTruthy();
  });

  it('should require valid password field', () => {
    const password = component.signupForm.controls['password'];
    expect(password.valid).toBeFalsy();

    password.setValue('gudpassword');
    expect(password.valid).toBeTruthy();
  });

  it('should register user if valid', () => {
    component.signupForm.controls['email'].setValue('testor@example.com');
    component.signupForm.controls['password'].setValue('password');
    component.signupForm.controls['passwordConf'].setValue('password');
    expect(component.signupForm.valid).toBeTruthy();
  });
});
