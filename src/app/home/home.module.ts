import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeRoutingModule } from "./home.routing.module";
import { HomeService } from "./home.service";
import { HomeComponent } from "./home.component";

@NgModule({
    imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent
    ],
    providers: [HomeService]
})
export class HomeModule {

}