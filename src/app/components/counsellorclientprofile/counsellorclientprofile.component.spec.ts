import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounsellorclientprofileComponent } from './counsellorclientprofile.component';

describe('CounsellorclientprofileComponent', () => {
  let component: CounsellorclientprofileComponent;
  let fixture: ComponentFixture<CounsellorclientprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounsellorclientprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounsellorclientprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
