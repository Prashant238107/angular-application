import { Component, OnInit } from '@angular/core';
import { Customer } from '../shared/models/customer';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'pm-customer-reactive-form',
  templateUrl: './customer-reactive-form.component.html',
  styleUrls: ['./customer-reactive-form.component.scss'],
})
export class CustomerReactiveFormComponent implements OnInit {
  customer = new Customer();
  customerForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.customerForm = this._formBuilder.group({
      firstName: '',
      lastName: { value: 'Verma', disabled: true },
      email: '',
      sendCatalog: true,
    });
  }

  save(): void {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }

  addTestData(): void {
    this.customerForm.setValue({
      firstName: 'Prashant',
      lastName: 'Verma',
      sendCatalog: true,
      email: 'prashant2381@gmail.com',
    });
  }

  updateTestData(): void {
    this.customerForm.patchValue({
      sendCatalog: false,
    });
  }
}
