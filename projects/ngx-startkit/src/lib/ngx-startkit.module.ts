import { NgModule } from '@angular/core';
import { NgxStartkitComponent } from './ngx-startkit.component';
import { StorageService } from './services/storage.service';
import { BaseService } from './services/base.service';



@NgModule({
  declarations: [NgxStartkitComponent],
  imports: [
  ],
  exports: [NgxStartkitComponent],
  providers: [
    StorageService,
    BaseService
  ]
})
export class NgxStartkitModule { }
