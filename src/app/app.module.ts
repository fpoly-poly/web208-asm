import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProductListPageComponent } from './admin/product-list-page/product-list-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NewProductPageComponent } from './admin/new-product-page/new-product-page.component';
import { UpdateProductPageComponent } from './admin/update-product-page/update-product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdminLayoutComponent,
    ProductListPageComponent,
    NewProductPageComponent,
    UpdateProductPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
