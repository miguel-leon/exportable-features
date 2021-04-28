import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { FeatureModuleLazy } from '@exportable-features/feature';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppInterceptor } from './app.interceptor';


@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		FeatureModuleLazy
	],
	providers: [{
		provide: HTTP_INTERCEPTORS,
		multi: true,
		useClass: AppInterceptor
	}],
	declarations: [
		AppComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
