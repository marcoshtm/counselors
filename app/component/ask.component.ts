import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ask',
  templateUrl: 'app/html/ask.component.html',
  styleUrls: ['app/css/ask.component.css']
})

export class AskComponent {
	router: Router;
	constructor(router:Router) {
		this.router = router;
	}
	submit(event: any) {
		this.router.navigate(['/home']);
	}
}