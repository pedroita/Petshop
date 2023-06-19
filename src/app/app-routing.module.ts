import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FramePageComponent } from './pages/master/frame.page';
import { ProductsPageComponent } from './pages/store/products-page/products-page.component';
import { CartPageComponent } from './pages/store/cart-page/cart-page.component';
import { PetsPageComponent } from './pages/account/pets-page/pets-page.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { SingupPageComponent } from './pages/account/singup-page/singup-page.component';
import { ResetPasswoldPageComponent } from './pages/account/reset-passwold-page/reset-passwold-page.component';

const routes: Routes = [
  {
    path:'',
    component: FramePageComponent,
    children:[
      {path:'',component:ProductsPageComponent},
      {path: 'cart', component: CartPageComponent}
    ]
  },
  {
    path : 'account',
    component : FramePageComponen
    children:[
      {path: 'pets',component:PetsPageComponent},
    ]
  },
  {path: 'login', component:LoginPageComponent},
  {path: 'singnup', component:SingupPageComponent},
  {path:'reset-password', component: ResetPasswoldPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
