import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'login',
	templateUrl: 'app/login/login.component.html',
	styleUrls: ['app/login/login.component.css']
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