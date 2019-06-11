import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerHomePageComponent } from './engineer-home-page.component';

describe('EnginerHomePageComponent', () => {
  let component: EngineerHomePageComponent;
  let fixture: ComponentFixture<EngineerHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EngineerHomePageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineerHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
