import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataFormControl } from '../data-form-control';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css'],
})
export class CardFormComponent implements OnInit {
  cardForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
    ]),
    //create an instance of the newly created class that extends & overwrite FormControl class
    expiration: new DataFormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
    ]),
    // expiration: new FormControl('', [
    //   Validators.required,
    //   Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
    // ]),
    securityCode: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
    ]),
  });
  constructor() {
    console.log(this.cardForm.get('name')); // check input name properties
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log('Form submitted');
  }
  onResetClick() {
    //FormGroup has a built-in method 'reset' that reset the fields to 'null', not back to inital value ('')
    this.cardForm.reset(); //error if not handle null
  }
}
