import { AddProductModule } from './../add-product/add-product.component.module';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ConvertHyphenToSpaces } from '../shared/pipes/convert-hyphen-to-space.pipe';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { ProductDetailsGuard } from '../shared/guards/product-detail.guard';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'products',
        component: ProductListComponent,
      },
      {
        path: 'products/:id',
        component: ProductDetailsComponent,
        canActivate: [ProductDetailsGuard],
      },
    ]),
    SharedModule,
  ],
  declarations: [
    ProductListComponent,
    ConvertHyphenToSpaces,
    ProductDetailsComponent,
  ],
})
export class ProductModule {}
