import { FormsModule } from '@angular/forms';
import { CustomerComponent } from './customer.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'customer',
        component: CustomerComponent,
      },
    ]),
  ],
  declarations: [CustomerComponent],
})
export class CustomerModule {}
