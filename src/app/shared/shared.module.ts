import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HelperService } from './services/app/helper.service';
import { HttpService } from './services/api/http.service';
import { FormValidations } from './services/Validations/FormValidations.service';

// config
export function getAuthServiceConfigs() {
}
@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule],
  providers: [
     HelperService, HttpService, FormValidations
  ]
})

export class SharedModule { }
