import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular-6-social-login";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NotifierModule } from 'angular-notifier';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessfullComponent } from './order-successfull/order-successfull.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { TokenInterceptorService } from './shared/services/api/token-interceptor.service';

// config
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider("Your-Facebook-app-id")
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("956780179041-nmm3q06al4jgl5ouh18c8lg5ri44k2tt.apps.googleusercontent.com")
      }
    ]
  );
  return config;
}

export const httpInterceptorProvider = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi:true
  }
]
@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    OrderSuccessfullComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    NotifierModule,
    // RouterModule.forRoot([
    //   {
    //     path: 'app',
    //     component: HomeComponent,
    //       children:[
    //       {
    //         path: 'products',
    //         // component: ProductsComponent
    //         loadChildren: './products/products.module#ProductsModule'
    //       },
    //       {
    //         path: 'shopping-cart',
    //         component: ShoppingCartComponent
    //       },
    //       {
    //         path: 'check-out',
    //         component: CheckoutComponent
    //       },
    //       {
    //         path: 'order-success',
    //         component: OrderSuccessfullComponent
    //       },
    //       {
    //         path: 'login',
    //         component: LoginComponent
    //       },
    //       {
    //         path: 'sign-up',
    //         component: SignUpComponent
    //       },
    //       {
    //         path: 'my/orders',
    //         component: MyOrdersComponent
    //       },
    //       {
    //         path: 'admin/products',
    //         component: AdminProductsComponent
    //       },
    //       {
    //         path: 'admin/orders',
    //         component: AdminOrdersComponent
    //       },
    //     ]
    //   },
    //   // {
    //   //   path: '',
    //   //   redirectTo: 'app',
    //   //   pathMatch: 'full'
    //   // }

    // ])
  ],
  providers: [
    httpInterceptorProvider,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    UserService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
