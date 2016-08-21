import { Injectable } from '@angular/core';
import { COUNSELORS } from '../mock/mock-counselours';

@Injectable()
export class CounselorService {
	getCounselors() {
		return Promise.resolve(COUNSELORS);
	}
	
	getCounselor(id: number) {
		return this.getCounselors()
			.then(counselors => counselors.find(counselor => counselor.id === id));
	}
}