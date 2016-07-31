import { Injectable } from '@angular/core';
import { COUNSELORS } from './mock-counselours';

@Injectable()
export class CounselorService {
	getCounselors() {
		return Promise.resolve(COUNSELORS);
	}
}