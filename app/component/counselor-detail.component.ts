import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Counselor } from '../domain/counselor';
import { CounselorService } from '../service/counselor.service';

@Component ({
	selector: 'counselor-detail',
	templateUrl: 'app/html/counselor-detail.component.html',
	styleUrls: ['app/css/counselor-detail.component.css']
})

export class CounselorDetailComponent implements OnInit, OnDestroy {
	@Input()
	counselor: Counselor;
	sub: any;
	
	constructor(
	  private counselorService: CounselorService,
	  private route: ActivatedRoute) {
	}
	
	ngOnInit() {
	  this.sub = this.route.params.subscribe(params => {
        let id = +params['id'];
        this.counselorService.getCounselor(id)
          .then((counselor:Counselor) => this.counselor = counselor);
       });
	}
	
	goBack() {
		window.history.back();
	}
	
	ngOnDestroy() {
	  this.sub.unsubscribe();
	}
}