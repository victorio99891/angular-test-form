import { Component, OnInit, ViewChild } from '@angular/core';
import { BasicFormControl } from './basic-form-control';
import { Router } from '@angular/router';
import { MyPopupComponent } from './../my-popup/my-popup.component';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {
  basicFormControl: BasicFormControl;

  @ViewChild(MyPopupComponent)
  popup: MyPopupComponent;

  roleList: string[] = ['Engineer', 'Programmer', 'Student'];

  constructor(private router: Router) {
    this.basicFormControl = new BasicFormControl();
  }

  ngOnInit() {
    this.basicFormControl.nameFormControl.valueChanges.subscribe(
      (value: string) => {}
    );
  }

  submit() {
    if (this.basicFormControl.basicFormGroup.invalid) {
      for (const control in this.basicFormControl.basicFormGroup.controls) {
        if (null !== control) {
          this.basicFormControl.basicFormGroup.get(control).markAsDirty();
        }
      }
    }

    if (this.basicFormControl.basicFormGroup.valid) {
      this.basicFormControl.nameFormControl.setValue(
        this.upperCaseFirst(this.basicFormControl.nameFormControl.value)
      );

      this.basicFormControl.lastNameFormControl.setValue(
        this.upperCaseFirst(this.basicFormControl.lastNameFormControl.value)
      );

      this.router.navigate([
        String(this.basicFormControl.roleFormControl.value).toLowerCase()
      ]);
    }
  }

  upperCaseFirst(text: string): string {
    let tmp = text.substring(0, 1).toUpperCase();
    tmp = tmp + text.substring(1);
    return tmp;
  }

  openPopUp() {
    this.popup.open();
  }
}
