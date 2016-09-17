import { provideRouter, RouterConfig } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AskComponent } from './advice/ask/ask.component';
import { GiveComponent } from './advice/give/give.component';

const routes: RouterConfig = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'give', component: GiveComponent },
  { path: 'ask', component: AskComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];