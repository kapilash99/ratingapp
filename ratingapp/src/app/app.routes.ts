import { Routes } from '@angular/router';
import { BHomeComponent } from './business/b-home/b-home.component';
import { BLoginComponent } from './business/b-login/b-login.component';

export const routes: Routes = [
    {path:'Home',component: BHomeComponent},
    {path:'businesslogin',component: BLoginComponent}
];
