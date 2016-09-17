import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: 'app/home/home.component.html',
    styleUrls: ['app/home/home.component.css']
})

export class HomeComponent {
    router: Router;
    constructor(router:Router) {
        this.router = router;
    }
    give(event: any) {
        this.router.navigate(['/give']);
    }
    ask(event: any) {
        this.router.navigate(['/ask']);
    }
}