# AngularCreditCard

Steps:

1. Import ReactiveFormsModule from '@angular/forms' in app.module.ts.
2. Generate card-form componenent that handles the form (ng g component CardForm)
3. In card-form.comp.ts, import FormGroup and FormControl to define an instance of FormGroup and create inside it FormControls (fields).
4. In card-from.comp.html create the form and bind <form [formGroup]="cardForm"> and <input formControlName="name" />.
   *formGroup directive - binds the form (FormGroup) instance created in TS to the <form> element.
   *formControlName directive - associates individual controls in the template to controls on the FormGroup instance by name; do not use binding here because it doesn't evaluate name as code.
5. Add validators to FormControls (fields). Import Validators from '@angular/forms' and use as second parmeter for any field you want to have validation for.
6. Check/find validation errors in template using:{{ cardForm.controls["name"].errors | json }} or {{ cardForm.get("name")?.errors | json }}.
7. Handle validation error in template; display a custom message using \*ngIf
<div *ngIf="cardForm.controls['name'].errors['required'] && cardForm.controls['name'].dirty &&
      cardForm.controls['name'].touched">Value is required.</div>
8. To check field's properties (FormControl), in ts file, inside constructor try console.log(this.cardForm.get('name'));
   --- FormControl Properties ---
   *valid = Angular validated whatever the user entered succesfully
   *invalid = the value in the input invalid
   *pending = validation is currently running on this field (for async validators)
   *disabled = ignore user input in this field, don't validate it
   *touched = user clicked into and then out of the field
   *untouched = user hasn't clicked into and then out of the field
   *pristine = user hasn't clicked into this field at all
   *dirty = user has changed the value of the field
   More: https://angular.io/api/forms/AbstractControl

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
