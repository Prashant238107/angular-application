import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTemplateFormComponent } from './customer-template-form.component';

describe('CustomerComponent', () => {
  let component: CustomerTemplateFormComponent;
  let fixture: ComponentFixture<CustomerTemplateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerTemplateFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
