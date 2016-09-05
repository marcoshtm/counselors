import { Component, OnInit } from '@angular/core';
import { Counselor } from '../domain/counselor';
import { CounselorService } from '../service/counselor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/html/dashboard.component.html',
  styleUrls: ['app/css/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  counselors: Counselor[] = [];
  constructor(private router: Router, private counselorService: CounselorService) { }
  ngOnInit() {
    this.counselorService.getCounselors()
      .then(counselors => this.counselors = counselors.slice(1, 5));
  }
  gotoDetail(counselor: Counselor) {
	let link = ['/detail', counselor.id];
	this.router.navigate(link);
  }
}
