import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validator } from '@angular/forms';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'my-input-text',
  templateUrl: './my-input-text.component.html',
  styleUrls: ['./my-input-text.component.css']
})
export class MyInputTextComponent implements OnInit {
  @Input()
  inputFormControl: FormControl;

  @Input()
  labelText: string;

  @Input()
  validatorList: Validator[];

  constructor() {}

  ngOnInit() {
    
  }
}
