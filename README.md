# Angular Login


## Objectives

* Create angular form
* Explain how angular forms work
* Cite examples of use cases for angular forms
* Create angular routes
* Explain how angular routes work

## Setup

## Exercise

* Create a new component `LoginFormComponent`
* Open the tests for it and use the stories to write failing tests.
* Add `<login-form>` to `app.component.html`
* Add nav links to `app.component.html` for: home, login, signup, logout.
* Create a login form in `login-form.component.html` with 2 fields: email and password
* Update `LoginFormComponent` with form inputs

### Stories

- The homepage displays: title, nav links, login form
- Logged in users cannot see the login or signup links
- The login form validates email
- The login form validates passwords with the following rules: must be longer than 5 characters.
- The login form has a disabled submit button if the form isn't properly filled out
