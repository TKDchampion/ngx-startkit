import { NgModule } from '@angular/core';
import { NgxStartkitComponent } from './ngx-startkit.component';
import { Storage } from './services/storage.service';



@NgModule({
  declarations: [NgxStartkitComponent],
  imports: [
  ],
  exports: [NgxStartkitComponent],
  providers: [Storage]
})
export class NgxStartkitModule { }
