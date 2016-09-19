import { provideRouter, RouterConfig } from '@angular/router';
import { SignupComponent } from './login/signup.component';
import { HomeComponent } from './home/home.component';
import { AskComponent } from './advice/ask/ask.component';
import { GiveComponent } from './advice/give/give.component';

const routes: RouterConfig = [
  { path: 'login', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'give', component: GiveComponent },
  { path: 'ask', component: AskComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];