import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilymemberlistComponent } from './familymemberlist.component';

describe('FamilymemberlistComponent', () => {
  let component: FamilymemberlistComponent;
  let fixture: ComponentFixture<FamilymemberlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilymemberlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilymemberlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
