import { TestBed } from '@angular/core/testing';
import { mocked } from 'ts-jest/utils';
import { of } from 'rxjs';

import { FeatureComponent } from './feature.component';
import { TitleService } from '@exportable-features/common';

jest.mock('@exportable-features/common');


describe('FeatureComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			providers: [
				TitleService
			],
			declarations: [
				FeatureComponent
			]
		}).compileComponents();
	});


	it('should create', () => {
		const fixture = TestBed.createComponent(FeatureComponent);
		expect(fixture.componentInstance).toBeTruthy();
	});


	it(`should render feature title`, () => {
		const titleService = mocked(TestBed.inject(TitleService));
		titleService.getTitle.mockReturnValue(of('testing feature title'));

		const fixture = TestBed.createComponent(FeatureComponent);
		fixture.detectChanges();

		const compiled = fixture.nativeElement;
		expect(compiled.querySelector('h2').textContent).toContain('testing feature title');
	});
});
