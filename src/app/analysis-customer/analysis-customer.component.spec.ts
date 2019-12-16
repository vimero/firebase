import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisCustomerComponent } from './analysis-customer.component';

describe('AnalysisCustomerComponent', () => {
  let component: AnalysisCustomerComponent;
  let fixture: ComponentFixture<AnalysisCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
