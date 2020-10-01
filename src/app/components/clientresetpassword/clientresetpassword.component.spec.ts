import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientresetpasswordComponent } from './clientresetpassword.component';

describe('ClientresetpasswordComponent', () => {
  let component: ClientresetpasswordComponent;
  let fixture: ComponentFixture<ClientresetpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientresetpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientresetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
