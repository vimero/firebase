import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiCustomerComponent } from './kpi-customer.component';

describe('KpiCustomerComponent', () => {
  let component: KpiCustomerComponent;
  let fixture: ComponentFixture<KpiCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
