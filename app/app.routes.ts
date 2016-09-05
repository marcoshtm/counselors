import { provideRouter, RouterConfig } from '@angular/router';
import { CounselorsComponent } from './component/counselors.component';
import { DashboardComponent } from './component/dashboard.component';
import { LoginComponent } from './component/login.component';
import { HomeComponent } from './component/home.component';
import { CounselorDetailComponent } from './component/counselor-detail.component';

const routes: RouterConfig = [
  {
	path: '',
	redirectTo: 'login',
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
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];