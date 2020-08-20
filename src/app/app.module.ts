import { CustomerTemplateFormModule } from './customer-template-form/customer-template-form.module';
import { ProductModule } from './products/product-list.component.module';
import { WelcomeComponent } from './home/welcome.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerReactiveFormModule } from './customer-reactive-form/customer-reactive-form.module';
import { AddProductModule } from './add-product/add-product.component.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './shared/services/product-data';
@NgModule({
  declarations: [AppComponent, WelcomeComponent],
  imports: [
    BrowserModule,
    InMemoryWebApiModule.forRoot(ProductData),
    AddProductModule,
    CustomerReactiveFormModule,
    CustomerTemplateFormModule,
    ProductModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
