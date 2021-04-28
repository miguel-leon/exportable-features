import { Component } from '@angular/core';
import { TitleService } from '@exportable-features/common';


@Component({
	selector: 'lib-feature',
	templateUrl: './feature.component.html'
})
export class FeatureComponent {

	constructor(private titleService: TitleService) {}

	title$ = this.titleService.getTitle();
}
