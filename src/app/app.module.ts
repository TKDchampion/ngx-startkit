import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxStartkitModule, HttpDefaultOptions, JWTOptions } from 'ngx-startkit';
import { environment } from 'src/environments/environment';

export class AuditHttpDefaultOptions extends HttpDefaultOptions {
  baseApiURL = environment.baseApiUrl; // input api base url.
}

export class AuditJWTOptions extends JWTOptions {
  key = 'user';
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxStartkitModule
  ],
  providers: [{
    provide: HttpDefaultOptions,
    useClass: AuditHttpDefaultOptions
  },
  {
    provide: JWTOptions,
    useClass: AuditJWTOptions
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
