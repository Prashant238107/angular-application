import { FormsModule } from '@angular/forms';
import { CustomerTemplateFormComponent } from './customer-template-form.component';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'customer-template-form',
        component: CustomerTemplateFormComponent,
      },
    ]),
  ],
  declarations: [CustomerTemplateFormComponent],
})
export class CustomerTemplateFormModule {}
