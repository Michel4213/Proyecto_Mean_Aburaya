import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { LoginComponent } from './components/users/login/login/login.component';
import { RegisterComponent } from './components/users/register/register/register.component';
import { UsersListComponent } from './components/users/users/users-list/users-list.component';
import { HomeComponent } from './components/layout/home/home.component';
import { CartComponent } from './components/layout/cart/cart.component';
import { loginGuard } from './guards/login.guard';
import { Products1Component } from './components/layout/products1/products1.component';



const routes: Routes = [
  {
    path: "products", component: ProductsListComponent,
    canActivate: [loginGuard]
  },
  { path: "users", component: UsersListComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "cart", component: CartComponent },
  { path: "product", component: Products1Component},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "**", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
