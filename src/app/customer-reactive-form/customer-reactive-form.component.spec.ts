import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReactiveFormComponent } from './customer-reactive-form.component';

describe('CustomerComponent', () => {
  let component: CustomerReactiveFormComponent;
  let fixture: ComponentFixture<CustomerReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerReactiveFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
