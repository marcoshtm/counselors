import { Component } from '@angular/core';
import { CounselorDetailComponent } from './counselor-detail.component';
import { Counselor } from '../domain/counselor';
import { CounselorService } from '../service/counselor.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-counselors',
  templateUrl: 'app/html/counselors.component.html',
  styleUrls: ['app/css/counselors.component.css'],
  directives: [CounselorDetailComponent]
})

export class CounselorsComponent implements OnInit {
	title = 'Conselheiros';
	selectedCounselor: Counselor;
	counselors: Counselor[];
	
	ngOnInit() {
		this.getCounselors();
	}
	
	constructor(private router: Router, private counselorService: CounselorService) {
	}
	
	getCounselors() {
		this.counselorService.getCounselors().then((counselors:any) => this.counselors = counselors);
	}
	
	onSelect(counselor: Counselor) {
		this.selectedCounselor = counselor;
	}
	
	gotoDetail() {
		let link = ['/detail', this.selectedCounselor.id];
		this.router.navigate(link);
	}
}