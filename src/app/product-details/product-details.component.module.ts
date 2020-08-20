import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details.component';
import { ProductDetailsGuard } from '../shared/guards/product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'products/:id',
        component: ProductDetailsComponent,
        canActivate: [ProductDetailsGuard],
      },
    ]),
    SharedModule,
  ],
  declarations: [ProductDetailsComponent],
})
export class ProductDetailsComponentModule {}
