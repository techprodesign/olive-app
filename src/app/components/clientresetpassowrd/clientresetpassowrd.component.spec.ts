import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientresetpassowrdComponent } from './clientresetpassowrd.component';

describe('ClientresetpassowrdComponent', () => {
  let component: ClientresetpassowrdComponent;
  let fixture: ComponentFixture<ClientresetpassowrdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientresetpassowrdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientresetpassowrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
