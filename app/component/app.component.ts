import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { CounselorService } from '../service/counselor.service';

export class Hero {
  id: number;
  name: string;
}
@Component({
  selector: 'my-app',
  templateUrl: 'app/html/app.component.html',
  styleUrls: ['app/css/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [CounselorService]
})
export class AppComponent {
}
