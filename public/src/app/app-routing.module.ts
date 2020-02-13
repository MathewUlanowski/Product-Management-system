import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { ProductsNewComponent } from './products-new/products-new.component';
import { ProductsIdComponent } from './products-id/products-id.component';


const routes: Routes = [
  {path: "products", component: ProductsComponent },
  {path: "products/new", component: ProductsNewComponent },
  {path: "products/:id", component: ProductsIdComponent },
  {path: "products/:id/edit", component: ProductsEditComponent },
  {path: "", pathMatch: "full", redirectTo: 'products'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
