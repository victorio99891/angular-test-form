import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'my-select-list',
  templateUrl: './my-select-list.component.html',
  styleUrls: ['./my-select-list.component.css']
})
export class MySelectListComponent implements OnInit {
  @Input()
  inputFormControl: FormControl;

  @Input()
  labelText: string;

  @Input()
  options: string[];

  constructor() {}

  ngOnInit() {
    if (this.options.length != 0) {
      this.inputFormControl.setValue(this.options[0]);
    }
  }
}
