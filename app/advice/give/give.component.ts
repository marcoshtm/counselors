import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'give',
  templateUrl: 'app/advice/give/give.component.html',
  styleUrls: ['app/advice/give/give.component.css']
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