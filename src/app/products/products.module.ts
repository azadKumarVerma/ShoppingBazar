import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsService } from './products.service';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ProductsComponent, CreateProductComponent],
  providers: [ProductsService]
})
export class ProductsModule {
    constructor(){ }
}
