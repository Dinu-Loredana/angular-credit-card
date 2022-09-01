# AngularCreditCard

Smapp Angular app to learn about Reactive Forms.
Reactive Forms:

- are defined in the component class (TS file)
- available in ReactiveFormsModules (@angular/forms)
- made with templates (html) + TS, easy type of form
- suitable for complex form validation
- suitable for unit testing
- known also as model-driven forms => we design our forms in the component (TS file) and then bind them or relate them to our HTML template
- a reactive form is a FormGroup that is made up of FormControls

---

#Have the form in the template.
#Create in the class component (ts) equivalent for form and each form field using FormGroup (form)and FormControl (input, eg) (or FormBuilder).
#Patch up the equivalent using [formGroup] for the form tag and for the form field either [formControl] directive or formControlName.

---

Notes:

1.  Import ReactiveFormsModule from '@angular/forms' in app.module.ts.
2.  Generate card-form componenent that handles the form (ng g component CardForm)
3.  In card-form.comp.ts, import FormGroup and FormControl to define an instance of FormGroup and create inside it FormControls (fields).
4.  In card-from.comp.html create the form and bind <form [formGroup]="cardForm"> and <input formControlName="name" />.
    *formGroup directive - binds the form (FormGroup) instance created in TS to the <form> element.
    *formControlName directive - associates individual controls in the template to controls on the FormGroup instance by name; do not use binding here because it doesn't evaluate name as code.
5.  Add validators to FormControls (fields). Import Validators from '@angular/forms' and use as second parmeter for any field you want to have validation for.
6.  Check/find validation errors in template using:{{ cardForm.controls["name"].errors | json }} or {{ cardForm.get("name")?.errors | json }}.
7.  Handle validation error in template; display a custom message using \*ngIf
<div *ngIf="cardForm.controls['name'].errors['required'] && cardForm.controls['name'].dirty &&
      cardForm.controls['name'].touched">Value is required.</div>
8.  To check field's properties (FormControl), in ts file, inside constructor try console.log(this.cardForm.get('name'));
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

9.  If there are more inputs that need to be validated, create a reusable input component. You can add extra errors messages in case other inputs has different validators to make it more reusable.
10. To create a label text reusable, dynamic, add in ts file @Input() label!: string so the Input template can receive from the parent the text for the label (<app-input label="Name" [control]="$any(cardForm.get('name'))"></app-input>) and display it using interpolation(<label class="label">{{ label }}</label>).
11. To create more input fields, add in card-form.com.ts more FormControls and in the template reuse the Input component and pass down label and control for each input.
12. To submit the form: in card-form.comp.html add <button type="submit" class="button is-primary" [disabled]="cardForm.invalid">Submit</button> before closing </form> tag. Define the handler func logic into card-form.comp.ts.
13. Use inputs masking for Expiration ans Security Code fields.
14. Input masking - hijacking FormControl: - generate a class (ng g class DataFormControl) and extends FormControl class and overwrite some logic
15. Alternative to input masking is ngx-mask package (npm i ngx-mask). To configure it, in app. module.ts add:
    import { NgxMaskModule, IConfig } from 'ngx-mask';
    export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};
    NgxMaskModule.forRoot(options) to imports of NgModule
    then in input.comp.html add mask="SSSS SSSS" to format input to add space after first 4 letters;
    problems with this -> it formats just the input (UI, john john), but the form data will be 'johnjohn' - not formatted.
16. Reset form - add into card-form.comp.html <button type="button" class="button is-danger" (click) ="onResetClick()">Reset</button> and add the handler fn logic into TS file.

    - 'reset' - built-in method of FormGroup that reset the input to 'null', not back to its initial value ('');
    - handle error - into data-form-control.ts add another case to set the value of the input to '' if there is no value (null or undefined) to avoid the error.
