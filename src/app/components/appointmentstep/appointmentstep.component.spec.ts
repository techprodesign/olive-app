import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentstepComponent } from './appointmentstep.component';

describe('AppointmentstepComponent', () => {
  let component: AppointmentstepComponent;
  let fixture: ComponentFixture<AppointmentstepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentstepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentstepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
