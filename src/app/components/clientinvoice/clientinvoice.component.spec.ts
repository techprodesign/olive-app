import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientinvoiceComponent } from './clientinvoice.component';

describe('ClientinvoiceComponent', () => {
  let component: ClientinvoiceComponent;
  let fixture: ComponentFixture<ClientinvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientinvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
