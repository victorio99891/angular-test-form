import { FormControl, FormGroup, Validators } from '@angular/forms';

export class BasicFormControl {
  nameFormControl: FormControl = new FormControl();
  lastNameFormControl: FormControl = new FormControl();
  roleFormControl: FormControl = new FormControl();
  ageFormControl: FormControl = new FormControl();

  basicFormGroup: FormGroup = new FormGroup({
    name: this.nameFormControl,
    lastName: this.lastNameFormControl,
    role: this.roleFormControl,
    age: this.ageFormControl
  });
  constructor() {
    // this.nameFormControl.setValue('');
    // this.lastNameFormControl.setValue('');
    // this.ageFormControl.setValue(0);
    this.nameFormControl.setValidators([
      Validators.minLength(3),
      Validators.maxLength(12),
      this.notNull
    ]);

    this.lastNameFormControl.setValidators([
      Validators.minLength(3),
      this.notNull
    ]);
    this.ageFormControl.setValidators([
      Validators.min(10),
      Validators.max(99),
      this.notNull
    ]);
  }

  notNull(c: FormControl) {
    return c.value != null
      ? null
      : {
          text: {
            valid: false
          }
        };
  }
}
