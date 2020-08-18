import { IProduct } from './../models/product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _productUrl = 'api/products/products.json';

  constructor(private _httpClient: HttpClient) {}

  public getProducts(): Observable<IProduct[]> {
    return this._httpClient.get<IProduct[]>(this._productUrl).pipe(
      tap((data) => console.log('All: ' + JSON.stringify(data))),
      catchError(this._handleError)
    );
  }

  private _handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  getProduct(id: number): Observable<IProduct | undefined> {
    return this.getProducts().pipe(
      map((products: IProduct[]) => products.find((p) => p.productId === id))
    );
  }
}
