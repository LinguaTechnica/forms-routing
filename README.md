# Angular Forms & Routing

We'll create a simple application that has two forms: a login form and a signup form. We'll also cover Angular routing.

There are 2 main approaches to forms in Angular: Reactive forms and Template-Driven forms. Reactive forms are scalable and immutable. Template driven forms are not.

I this exercise we will create both. The Subscribe form will be Template-Driven and the Signup and Login forms will be Reactive forms.

> **INSTRUCTOR NOTE:** If you've already introduced Angular testing, you can make tests required for the exercise steps.


## Objectives
> 2 blocks

* Create angular form
* Explain how angular forms work
* Cite examples of use cases for angular forms
* Create angular routes
* Explain how angular routes work

> **INSTRUCTOR NOTE:** Routing is the second part of the lesson and therefore optional. You can view the solution on the 'noroutes' branch of this repo. The 'solution' branch has everything including routes.

## Setup

``` 
ng new ngrouting --routing
cd ngrouting
ng serve -o
```

To use forms in Angular you must have one of the following modules configured: `FormsModule` or `ReactiveFormsModule` module. Using a `form` tag in your HTML while only the latter is imported will display a `ContainerModule` error.

## Exercise Overview

Below are a list of steps to *guide* you. At any given step, you are free to use *all* of the things you've learned about Angular and javascript to complete the app. You are not limited to the steps below. However, focus on mastery of Angular forms.

You are allowed to create additional components, classes or add services. 

*Step 1: The Basic App*
* Create a new component `LoginFormComponent`
* OPTIONAL: Open the app tests and use the stories to write failing tests for `AppComponent`

Think about how the component needs to work and then, one test at a time, add each feature of it.

*Step 2: The Subscribe Form*
* Create  a new `SubscribeFormComponent`
* OPTIONAL: Use the stories to write failing tests

Think about how the component needs to work and then, one test at a time, add each feature of it.

*OPTIONAL: Step 3: Links and Routing*

This is a continuation of the 'noroutes' branch of this repo.

* Add a nav bar `app.component.html`. Focus on making it responsive.
* Add links: Home, Login, Subscribe and Signup.
* The 'home' route should redirect to '/' path.
* Add a nested route '/' for a new component, `AboutComponent`, with path '/about' 
* Add data to the '/' route: copyright with value Copyright 2032
* Use the data to display it within the component anywhere you like.

Think about how routes need work and then, one test at a time, add each to the nav bar.

This will get you started. Now that you have established working components and routing, it should be much easier to add additional components and routes. Complete the stories below by implementing the features described.

### Stories

Once all tests are passing and all the stories are implemented, focus on styling with HTML and CSS. *Do not use any CSS frameworks.*

**`AppComponent`**
- has the following layout: title, navigation links, a simple welcome message, and footer
- has navigation links to: home, login, signup and subscribe
- Components should all load in this component when visiting a link.

**`SubscribeFormComponent`**
- has a single input: email address
- has a submit button
- has validation for valid email addresses

**`SignupFormComponent`**
- has fields for: first name, last name, email, password and password confirmation
- has a submit button
- submit button is disabled if the form isn't properly filled out
- has validation for all fields. Passwords must be at least 6 characters.

**`LoginFormComponent`**
- has fields for: email and password
- has a submit button
- submit button is disabled if the form isn't properly filled out
- has validation for all fields.

**Stretch Goals**
> Any one of these goals may require use of additional components, services, or classes. The goal is for you to use your new skills to solve the following problems.

- has authorization: logged in users cannot see the login or signup links
- add `localStorage` to persist a list of subscribers.
- use `localStorage` for authentication.
- refactor: DRY up your app and apply SOLID principles.

### Troubleshooting

**Test Errors**
- `Can't bind to 'formControl' since it isn't a known property of 'input'.`: You probably need to update the testing module with the proper form imports.
