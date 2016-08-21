import { provideRouter, RouterConfig } from '@angular/router';
import { CounselorsComponent } from './counselors.component';
import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './login.component';
import { HomeComponent } from './home.component';
import { CounselorDetailComponent } from './counselor-detail.component';

const routes: RouterConfig = [
  {
	path: '',
	redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'counselors',
    component: CounselorsComponent
  },
  {
	path: 'dashboard',
	component: DashboardComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'detail/:id',
    component: CounselorDetailComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];