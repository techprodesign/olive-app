import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounsellorClientComponent } from './counsellor-client.component';

describe('CounsellorClientComponent', () => {
  let component: CounsellorClientComponent;
  let fixture: ComponentFixture<CounsellorClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounsellorClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounsellorClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
