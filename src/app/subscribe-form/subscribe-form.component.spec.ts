import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { SubscribeFormComponent } from './subscribe-form.component';

describe('SubscribeFormComponent', () => {
  let component: SubscribeFormComponent;
  let fixture: ComponentFixture<SubscribeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeFormComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  xit('should require valid email', () => {
    const form = component.subscribeForm.form.controls;
    expect(form.email.valid).toBeFalsy();
  });
});
