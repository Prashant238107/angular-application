import { Component, OnInit } from '@angular/core';
import { Customer } from '../shared/models/customer';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'pm-customer-reactive-form',
  templateUrl: './customer-reactive-form.component.html',
  styleUrls: ['./customer-reactive-form.component.scss'],
})
export class CustomerReactiveFormComponent implements OnInit {
  customer = new Customer();
  customerForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      sendCatalog: new FormControl(true),
      email: new FormControl(),
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
