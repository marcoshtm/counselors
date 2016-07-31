import { Component } from '@angular/core';
import { CounselorDetailComponent } from './counselor-detail.component';
import { Counselor } from './counselor';
import { CounselorService } from './counselor.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
	<h1>{{title}}</h1>
	
	<h2>Os dez melhores conselheiros:</h2>
	<ul class="counselors">
	  <li *ngFor="let counselor of counselors" [class.selected]="counselor == selectedCounselor" (click)="onSelect(counselor)">
		<span class="badge">{{counselor.name}} - {{counselor.id}}</span>
	  </li>
	</ul>
	
	<counselor-detail [counselor]="selectedCounselor"></counselor-detail>`,
  styles: [`
	  .selected {
		background-color: #CFD8DC !important;
		color: white;
	  }
	  .counselors {
		margin: 0 0 2em 0;
		list-style-type: none;
		padding: 0;
		width: 15em;
	  }
	  .counselors li {
		cursor: pointer;
		position: relative;
		left: 0;
		background-color: #EEE;
		margin: .5em;
		padding: .3em 0;
		height: 1.6em;
		border-radius: 4px;
	  }
	  .counselors li.selected:hover {
		background-color: #BBD8DC !important;
		color: white;
	  }
	  .counselors li:hover {
		color: #607D8B;
		background-color: #DDD;
		left: .1em;
	  }
	  .counselors .text {
		position: relative;
		top: -3px;
	  }
	  .counselors .badge {
		display: inline-block;
		font-size: small;
		color: white;
		padding: 0.8em 0.7em 0 0.7em;
		background-color: #607D8B;
		line-height: 1em;
		position: relative;
		left: -1px;
		top: -4px;
		height: 1.8em;
		margin-right: .8em;
		border-radius: 4px 0 0 4px;
	  }
	`],
	directives: [CounselorDetailComponent],
	providers: [CounselorService]
})

export class AppComponent implements OnInit {
	title = 'Conselheiros';
	selectedCounselor: Counselor;
	counselors: Counselor[];
	
	ngOnInit() {
		this.getCounselors();
	}
	
	constructor(private counselorService: CounselorService) {
	}
	
	getCounselors() {
		this.counselorService.getCounselors().then(counselors => this.counselors = counselors);
	}
	
	onSelect(counselor: Counselor) {
		this.selectedCounselor = counselor;
	}
}