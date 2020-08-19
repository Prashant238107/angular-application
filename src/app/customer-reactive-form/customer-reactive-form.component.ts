import { Component, OnInit } from '@angular/core';
import { Customer } from '../shared/models/customer';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'pm-customer-reactive-form',
  templateUrl: './customer-reactive-form.component.html',
  styleUrls: ['./customer-reactive-form.component.scss'],
})
export class CustomerReactiveFormComponent implements OnInit {
  customer = new Customer();

  constructor() {}

  ngOnInit(): void {}

  save(customerForm: NgForm): void {
    console.log(customerForm.form);
    console.log('Saved: ' + JSON.stringify(customerForm.value));
  }
}
