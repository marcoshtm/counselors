import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'signup',
	templateUrl: 'app/login/signup.component.html',
	styleUrls: ['app/login/signup.component.css']
})


export class SignupComponent {
	router: Router;
	constructor(router:Router) {
		this.router = router;
	}
	signup(event: any) {
		this.router.navigate(['/home']);
	}
}