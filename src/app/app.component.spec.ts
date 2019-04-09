import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Router} from '@angular/router';
import { Location } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SubscribeFormComponent } from './subscribe-form/subscribe-form.component';

describe('AppComponent', () => {
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
      ],
    }).compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Angular Forms'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular Forms');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Home');
  });
});

xdescribe('Routing', () => {
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', component: AppComponent },
          { path: 'home', component: HomeComponent }
        ]),
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        HomeComponent,
        LoginFormComponent,
        SubscribeFormComponent,
        SignupFormComponent
      ]
    }).compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
  }));

  it('navigate to /home', fakeAsync(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    router.navigate(['home']);
    tick();
    fixture.detectChanges();
    console.log('INFO', location.path());
    expect(location.path()).toBe('/home');
  }));
  //
  // it('navigate to /login', fakeAsync(() => {
  //   router.navigate(['/login']);
  //   expect(location.path()).toBe('/login');
  // }));
  //
  // it('navigate to /signup', fakeAsync(() => {
  //   router.navigate(['/signup']);
  //   expect(location.path()).toBe('/signup');
  // }));
  //
  // it('navigate to /subscribe', fakeAsync(() => {
  //   router.navigate(['/subscribe']);
  //   expect(location.path()).toBe('/subscribe');
  // }));
});
