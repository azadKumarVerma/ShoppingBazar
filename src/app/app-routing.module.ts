import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { SignUpComponent } from "./sign-up/sign-up.component";

const routes : Routes = [
    {
        path: 'app',
        children: [
            {
                path: 'home',
                loadChildren: './home/home.module#HomeModule'
            },
            {
                path: 'products',
                loadChildren : './products/products.module#ProductsModule',
            },
            {
                path: 'category',
                loadChildren : './category/category.module#CategoryModule',
            },
            {
                path:'**',
                redirectTo: 'home'
            }
  ]
},
{
    path: '',
    redirectTo : 'app',
    pathMatch: 'full'
},
{
   path: '**',
   redirectTo : 'app',
   pathMatch: 'full'

}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
