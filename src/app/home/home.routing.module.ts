import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./home.component";
import { Routes, RouterModule } from "@angular/router";

const routes : Routes = [
    {
        path : '',
        component: HomeComponent,
        pathMatch : 'full'
    }
];

@NgModule({
    imports: [CommonModule,
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {

}