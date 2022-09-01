import { FormControl } from '@angular/forms';

export class DataFormControl extends FormControl {
  override setValue(value: string, options: any) {
    console.log(value);
    // set Value to '' if value is null (for resetting - to avoid error)
    if (!value) {
      super.setValue('', { ...options, emitModelToViewChange: true });
      return;
    }

    // don't allow user to type something else than just digits with regular expression
    if (value.match(/[^0-9|\/]/gi)) {
      super.setValue(this.value, { ...options, emitModelToViewChange: true }); //return current value
      return;
    }

    // don't allow user to type more than 5 characters into the expiration input
    if (value.length > 5) {
      super.setValue(this.value, {
        ...options,
        emitModelToViewChange: true,
      }); //return current value
      return;
    }

    // allow user to detele '/' that was added automatically
    if (value.length === 2 && this.value.length === 3) {
      super.setValue(value, {
        ...options,
        emitModelToViewChange: true,
      });
      return;
    }

    if (value.length === 2) {
      super.setValue(value + '/', {
        ...options,
        emitModelToViewChange: true,
      }); //it adds '/' after the first 2 digits, but if you want to delete, it'll add '/' again because length of value is 2.
      return;
    }
    super.setValue(value, { ...options, emitModelToViewChange: true });

    //super.setValue(value + '*', { ...options, emitModelToViewChange: true }); // it updates form object and also input in the DOM
    // super.setValue(value + '*', options); // it adds '*' at the end of value and it reflects into from object, but it does't update the input field - use 'emitModelToViewChange' from 'options'
  }
}

// FormControl has by defaul 'setValue' method  that sets a new value for the form control (field).The method takes value & options as paramameters. It can be overwritten by extending FormControl class as a new class. After owerwrite the logic, use the newlyy created class and create a new instance out of it -- new DataFormControl() in card-form-comp.ts
