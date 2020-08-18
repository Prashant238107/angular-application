import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'pm-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  customer = new Customer();

  constructor() {}

  ngOnInit(): void {}

  save(customerForm: NgForm): void {
    console.log(customerForm.form);
    console.log('Saved: ' + JSON.stringify(customerForm.value));
  }
}
