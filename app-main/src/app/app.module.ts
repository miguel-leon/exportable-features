import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppInterceptor } from './app.interceptor';


@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule
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
