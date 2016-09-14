import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'give',
  templateUrl: 'app/html/give.component.html',
  styleUrls: ['app/css/give.component.css']
})

export class GiveComponent {
	router: Router;
	constructor(router:Router) {
		this.router = router;
	}
	submit(event: any) {
		this.router.navigate(['/home']);
	}
}