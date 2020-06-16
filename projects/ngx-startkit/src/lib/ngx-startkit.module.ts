import { NgModule } from '@angular/core';
import { NgxStartkitComponent } from './ngx-startkit.component';
import { StorageService } from './services/storage.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JWTInterceptor } from './interceptor/jwt-interceptor';



@NgModule({
  declarations: [NgxStartkitComponent],
  imports: [
  ],
  exports: [NgxStartkitComponent],
  providers: [
    StorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTInterceptor,
      multi: true,
    }
  ]
})
export class NgxStartkitModule { }
