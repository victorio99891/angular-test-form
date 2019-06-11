import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySelectListComponent } from './my-select-list.component';

describe('MySelectListComponent', () => {
  let component: MySelectListComponent;
  let fixture: ComponentFixture<MySelectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySelectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySelectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
