import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'my-popup',
  templateUrl: './my-popup.component.html',
  styleUrls: ['./my-popup.component.css']
})
export class MyPopupComponent implements OnInit {
  @Input()
  closeWhenOutOfFocus: boolean = true;

  @Input()
  public title: string;

  @Input()
  public set opened(value: boolean) {
    this._opened = value;
  }

  private _opened: boolean = false;

  private _nativeElement;

  constructor(private el: ElementRef) {
    this._nativeElement = el.nativeElement;
  }

  ngOnInit(): void {
    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this._nativeElement);

    // close modal on background click
    if (this.closeWhenOutOfFocus) {
      this._nativeElement.addEventListener('click', (e: any) => {
        if (e.target === this._nativeElement) {
          this.close();
        }
      });
    }
  }

  ngOnDestroy(): void {
    // this._nativeElement.remove(ł); remove() is not supported by IE
    // if (document.body.contains(this._nativeElement)) {
    //     document.body.removeChild(this._nativeElement);
    // }
    this._nativeElement.parentNode.removeChild(this._nativeElement);
  }

  public open() {
    this._opened = true;
    this._nativeElement.style.display = 'block';
  }

  public close() {
    this._opened = false;
    this._nativeElement.style.display = 'none';
  }

  public get opened(): boolean {
    return this._opened;
  }
}
