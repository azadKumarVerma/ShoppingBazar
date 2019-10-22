import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CategoryComponent } from "./category.component";
import { Routes, RouterModule } from "@angular/router";
import { CreateCategoryComponent } from "./create-category/create-category.component";

const routes : Routes = [
    {
        path : '',
        component: CategoryComponent,
        pathMatch : 'full'
    },
    {
     path: 'create-category',
     component: CreateCategoryComponent
    }
];

@NgModule({
    imports: [CommonModule,
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CategoryRoutingModule {

}