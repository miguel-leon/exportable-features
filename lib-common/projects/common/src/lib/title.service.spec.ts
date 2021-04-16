import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TitleService } from './title.service';


describe('TitleService', () => {
	let service: TitleService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule
			]
		})
		service = TestBed.inject(TitleService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should http request title.txt', () => {
		service.getTitle().subscribe();

		const httpTestingController = TestBed.inject(HttpTestingController);
		const req = httpTestingController.expectOne('title.txt');
		expect(req.request.method).toEqual('GET');
		httpTestingController.verify();
	});
});
