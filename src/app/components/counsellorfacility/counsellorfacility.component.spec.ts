import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounsellorfacilityComponent } from './counsellorfacility.component';

describe('CounsellorfacilityComponent', () => {
  let component: CounsellorfacilityComponent;
  let fixture: ComponentFixture<CounsellorfacilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounsellorfacilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounsellorfacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
