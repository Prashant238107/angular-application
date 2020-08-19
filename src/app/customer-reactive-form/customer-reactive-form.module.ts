import { FormsModule } from '@angular/forms';
import { CustomerReactiveFormComponent } from './customer-reactive-form.component';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'customer-reactive-form',
        component: CustomerReactiveFormComponent,
      },
    ]),
  ],
  declarations: [CustomerReactiveFormComponent],
})
export class CustomerReactiveFormModule {}
