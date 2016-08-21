import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: 'app/html/home.component.html',
  styleUrls: ['app/css/home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) { }
  askAdvice() {
	let link = ['/askAdvice', ''];
	this.router.navigate(link);
  }
  giveAdvice() {
  	let link = ['/giveAdvice', ''];
	this.router.navigate(link);
  }
}