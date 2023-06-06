import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ResetPasswoldPageComponent } from './reset-passwold-page/reset-passwold-page.component';
import { SingupPageComponent } from './singup-page/singup-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { PetsPageComponent } from './pets-page/pets-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    ResetPasswoldPageComponent,
    SingupPageComponent,
    ProductsPageComponent,
    PetsPageComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
