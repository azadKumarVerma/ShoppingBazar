import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { ProductsComponent } from "./products.component";
import { CreateProductComponent } from "./create-product/create-product.component";

const routes : Routes = [
    {
        path : '',
        component: ProductsComponent,
        pathMatch : 'full'
    },
    {
     path: 'create-product',
     component: CreateProductComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule {
    constructor(){
        console.log("product routing module called");
    }
}