import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: 'app/html/home.component.html',
    styleUrls: ['app/css/home.component.css']
})

export class HomeComponent {
    router: Router;
    constructor(router:Router) {
        this.router = router;
    }
    give(event) {
        this.router.navigate(['/give']);
    }
    ask(event) {
        this.router.navigate(['/ask']);
    }
}