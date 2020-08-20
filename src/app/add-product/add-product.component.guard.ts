import { AddProductComponent } from './add-product.component';
import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddProductGuard implements CanDeactivate<AddProductComponent> {
  canDeactivate(
    component: AddProductComponent
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (component.productForm.dirty) {
      const productName =
        component.productForm.get('productName').value || 'New Product';
      return confirm(`Navigate away and lose all changes to ${productName}?`);
    }
    return true;
  }
}
