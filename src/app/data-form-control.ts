import { FormControl } from '@angular/forms';

export class DataFormControl extends FormControl {
  override setValue(value: string, options: any) {
    console.log(value);
    super.setValue(value + '*', options);
  }
}

// FormControl has by defaul 'setValue' method  that sets a new value for the form control (field).The method takes value & options as paramameters. It can be overwritten by extending FormControl class as a new class. After owerwrite the logic, use the newlyy created class and create a new instance out of it -- new DataFormControl() in card-form-comp.ts
