import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './root/root.component';
import { appRouterProviders } from './app.routes';

bootstrap(AppComponent, [
  appRouterProviders
]);
