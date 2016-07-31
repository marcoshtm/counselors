import { Component, Input } from '@angular/core';
import { Counselor } from './counselor';

@Component ({
	selector: 'counselor-detail',
	template: `
		<div *ngIf="counselor">
			<h2>{{counselor.name}} details!</h2>
			<div><label>Id:</label> {{counselor.id}}</div>
			<div><label>Nome:</label> <input [(ngModel)]="counselor.name" placeholder="name" /></div>
		</div>`
})

export class CounselorDetailComponent {
	@Input()
	counselor: Counselor;
}