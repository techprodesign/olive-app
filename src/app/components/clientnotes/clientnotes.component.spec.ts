import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientnotesComponent } from './clientnotes.component';

describe('ClientnotesComponent', () => {
  let component: ClientnotesComponent;
  let fixture: ComponentFixture<ClientnotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientnotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
