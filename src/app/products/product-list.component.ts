import { IProduct } from './../shared/models/product';
import { ProductService } from './../shared/services/product.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public pageTitle = 'Product List';
  public imageMargin = 2;
  public imageWidth = 50;
  public showImage = false;
  private _listFilter = 'cart';
  public products: IProduct[];
  public filteredProducts: IProduct[];

  ngOnInit(): void {
    this.products = this._productService.getProducts();
    this.filteredProducts = this.products;
  }

  constructor(private _productService: ProductService) {}

  public get listFilter(): string {
    return this._listFilter;
  }

  public set listFilter(listFilter: string) {
    this._listFilter = listFilter;

    this.filteredProducts = this.listFilter
      ? this._performFilter(this.listFilter)
      : this.products;
  }

  public toggleImage(): void {
    this.showImage = !this.showImage;
  }

  private _performFilter(filterBy: string) {
    filterBy = filterBy.toLowerCase();
    return this.products.filter(
      (product: IProduct) =>
        product.productName.toLowerCase().indexOf(filterBy) !== -1
    );
  }

  public onRatingClicked(event: string): void {
    this.pageTitle = event;
  }
}
