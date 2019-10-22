import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CategoryRoutingModule } from "./category.routing.module";
import { CategoryService } from "./category.service";
import { CategoryComponent } from "./category.component";
import { CreateCategoryComponent } from "./create-category/create-category.component";

@NgModule({
    imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CategoryRoutingModule
    ],
    declarations: [
      CategoryComponent,
      CreateCategoryComponent
    ],
    providers: [CategoryService]
})
export class CategoryModule {

}