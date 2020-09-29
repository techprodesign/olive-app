import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfamilyComponent } from './addfamily.component';

describe('AddfamilyComponent', () => {
  let component: AddfamilyComponent;
  let fixture: ComponentFixture<AddfamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
