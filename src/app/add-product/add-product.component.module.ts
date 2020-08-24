import { CommonModule } from '@angular/common';
import { ProductResolver } from './../shared/resolvers/product-resolver.service';
import { AddProductGuard } from './add-product.component.guard';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product.component';
import { ProductEditInfoComponent } from './product-edit-info.component';
import { ProductEditTagsComponent } from './product-edit-tags.component';
@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'products/:id/edit',
        component: AddProductComponent,
        canDeactivate: [AddProductGuard],
        resolve: { product: ProductResolver },
        children: [
          {
            path: '',
            redirectTo: 'info',
            pathMatch: 'full',
          },
          {
            path: 'info',
            component: ProductEditInfoComponent,
          },
          {
            path: 'tags',
            component: ProductEditTagsComponent,
          },
        ],
      },
    ]),
  ],
  exports: [],
  declarations: [
    AddProductComponent,
    ProductEditInfoComponent,
    ProductEditTagsComponent,
  ],
})
export class AddProductModule {}
