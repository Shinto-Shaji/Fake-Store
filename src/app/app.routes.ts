import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ProductComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { CategoryProductsComponent } from './pages/category-products/category-products.component';    
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'category',
        component: CategoriesComponent
    },
    {
        path: 'product/:id',
        component: ProductComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'category-products/:categoryName',
        component: CategoryProductsComponent
    }
];