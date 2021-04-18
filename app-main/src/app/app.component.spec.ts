import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { mocked } from 'ts-jest/utils'
import { of } from 'rxjs';

import { AppComponent } from './app.component';
import { TitleService } from '@exportable-features/common';

jest.mock('@exportable-features/common');


describe('AppComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				RouterTestingModule
			],
			providers: [
				TitleService
			],
			declarations: [
				AppComponent
			],
		}).compileComponents();
	});

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	it(`should render app title`, () => {
		const titleService = mocked(TestBed.inject(TitleService));
		titleService.getTitle.mockReturnValue(of('testing title'));

		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();

		const compiled = fixture.nativeElement;
		expect(compiled.querySelector('h1').textContent).toContain('testing title');
	});
});
