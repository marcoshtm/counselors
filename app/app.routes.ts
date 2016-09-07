import { provideRouter, RouterConfig } from '@angular/router';
import { LoginComponent } from './component/login.component';
import { CounselorsComponent } from './component/counselors.component';
import { DashboardComponent } from './component/dashboard.component';
import { HomeComponent } from './component/home.component';
import { GiveComponent } from './component/give.component';
import { AskComponent } from './component/ask.component';
import { CounselorDetailComponent } from './component/counselor-detail.component';

const routes: RouterConfig = [
  { path: 'login', component: LoginComponent },
  { path: 'counselors', component: CounselorsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'give', component: GiveComponent },
  { path: 'ask', component: AskComponent },
  { path: 'detail/:id', component: CounselorDetailComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];