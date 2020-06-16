import { NgModule } from '@angular/core';
import { NgxStartkitComponent } from './ngx-startkit.component';
import { StorageService } from './services/storage.service';



@NgModule({
  declarations: [NgxStartkitComponent],
  imports: [
  ],
  exports: [NgxStartkitComponent],
  providers: [StorageService]
})
export class NgxStartkitModule { }
