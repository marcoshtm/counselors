import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Router } from '@angular/router';

export class Hero {
  id: number;
  name: string;
}
@Component({
  selector: 'my-app',
  templateUrl: 'app/root/root.component.html',
  styleUrls: ['app/root/root.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class RootComponent {
  constructor(router:Router) {
    router.navigate(['/login']);
  }
}