import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProductListPageComponent } from './admin/product-list-page/product-list-page.component';
import { NewProductPageComponent } from './admin/new-product-page/new-product-page.component';
import { UpdateProductPageComponent } from './admin/update-product-page/update-product-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', component: ProductListPageComponent },
      { path: 'new-product', component: NewProductPageComponent },
      { path: ':id/edit', component: UpdateProductPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
