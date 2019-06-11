import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validator } from '@angular/forms';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'my-input-number',
  templateUrl: './my-input-number.component.html',
  styleUrls: ['./my-input-number.component.css']
})
export class MyInputNumberComponent implements OnInit {
  @Input()
  inputFormControl: FormControl;

  @Input()
  labelText: string;

  @Input()
  validatorList: Validator[];
  constructor() {}

  ngOnInit() {}
}
