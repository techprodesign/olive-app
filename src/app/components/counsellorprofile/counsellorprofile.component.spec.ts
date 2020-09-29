import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounsellorprofileComponent } from './counsellorprofile.component';

describe('CounsellorprofileComponent', () => {
  let component: CounsellorprofileComponent;
  let fixture: ComponentFixture<CounsellorprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounsellorprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounsellorprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
