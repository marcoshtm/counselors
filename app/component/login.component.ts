import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'login',
	templateUrl: 'app/html/login.component.html',
	styleUrls: ['app/css/login.component.css']
})

export class LoginComponent {
	router: Router;
	constructor(router:Router) {
		this.router = router;
	}
	register(event: any) {
		this.router.navigate(['/home']);
	}
}