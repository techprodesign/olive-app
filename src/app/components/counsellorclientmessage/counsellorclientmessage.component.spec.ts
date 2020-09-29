import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounsellorclientmessageComponent } from './counsellorclientmessage.component';

describe('CounsellorclientmessageComponent', () => {
  let component: CounsellorclientmessageComponent;
  let fixture: ComponentFixture<CounsellorclientmessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounsellorclientmessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounsellorclientmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
