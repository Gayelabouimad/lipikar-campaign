import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent }, // Default route
    { path: 'cart', component: CartComponent }, // Cart route accessible only by URL
    { path: '**', redirectTo: '' } // Redirect unknown paths to the main page
];
