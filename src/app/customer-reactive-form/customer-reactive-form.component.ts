import { Component, OnInit } from '@angular/core';
import { Customer } from '../shared/models/customer';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';

function ratingRange(min: number, max: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (
      (control.value !== null && isNaN(control.value)) ||
      control.value < min ||
      control.value > max
    ) {
      return { range: true };
    }
    return null;
  };
}
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
      firstName: ['Prashant', [Validators.required, Validators.minLength(3)]],
      lastName: ['Verma', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      phone: '',
      notification: 'email',
      sendCatalog: true,
      rating: [null, [ratingRange(1, 5)]],
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
      phone: '+91-9897158251',
      notification: 'email',
      rating: 5,
    });
  }

  updateTestData(): void {
    this.customerForm.patchValue({
      sendCatalog: false,
    });
  }

  setNotification(type: string): void {
    const phoneControl = this.customerForm.get('phone');
    if (type === 'text') {
      phoneControl.setValidators(Validators.required);
    } else {
      phoneControl.clearValidators();
    }

    phoneControl.updateValueAndValidity();
  }
}
