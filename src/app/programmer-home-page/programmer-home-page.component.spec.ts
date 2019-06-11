import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammerHomePageComponent } from './programmer-home-page.component';

describe('ProgrammerHomePageComponent', () => {
  let component: ProgrammerHomePageComponent;
  let fixture: ComponentFixture<ProgrammerHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammerHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammerHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
