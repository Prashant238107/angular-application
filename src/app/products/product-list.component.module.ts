import { AddProductModule } from './../add-product/add-product.component.module';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'products',
        component: ProductListComponent,
      },
    ]),
    SharedModule,
  ],
  declarations: [ProductListComponent],
})
export class ProductModule {}
