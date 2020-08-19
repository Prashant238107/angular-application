import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from '../shared/models/customer';

@Component({
  selector: 'pm-customer-template-form',
  templateUrl: './customer-template-form.component.html',
  styleUrls: ['./customer-template-form.component.scss'],
})
export class CustomerTemplateFormComponent implements OnInit {
  customer = new Customer();

  constructor() {}

  ngOnInit(): void {}

  save(customerForm: NgForm): void {
    console.log(customerForm.form);
    console.log('Saved: ' + JSON.stringify(customerForm.value));
  }
}
