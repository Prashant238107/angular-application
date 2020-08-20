import { AddProductGuard } from './add-product.component.guard';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product.component';
@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'products/:id/edit',
        component: AddProductComponent,
        canDeactivate: [AddProductGuard],
      },
    ]),
  ],
  exports: [],
  declarations: [AddProductComponent],
})
export class AddProductModule {}
