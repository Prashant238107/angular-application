import { Router, ActivatedRoute } from '@angular/router';
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
  private _listFilter = '';
  public products: IProduct[];
  public filteredProducts: IProduct[];
  private _errorMessage: string;

  ngOnInit(): void {
    this._listFilter = this.activatedRoute.snapshot.queryParamMap.get(
      'filterBy'
    );
    this.showImage =
      this.activatedRoute.snapshot.queryParamMap.get('showImage') === 'true';
    this._productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.filteredProducts = this._performFilter(this.listFilter);
      },
      error: (err) => (this._errorMessage = err),
    });
  }

  constructor(
    private _productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

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
