import { bootstrap } from '@angular/platform-browser-dynamic';
import { RootComponent } from './root/root.component';
import { appRouterProviders } from './app.routes';

bootstrap(RootComponent, [
  appRouterProviders
]);

