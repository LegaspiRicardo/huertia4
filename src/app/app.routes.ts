import { Routes } from '@angular/router';
import { OnboardingComponent } from './features/onboarding/onboarding.component';


import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

export const routes: Routes = [

    {path: '', component: OnboardingComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'dashboard', component: DashboardComponent}
];