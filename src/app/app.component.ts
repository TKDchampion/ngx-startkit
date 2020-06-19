import { Component } from '@angular/core';
import { StorageService, JWTOptions, GlobalService } from 'ngx-startkit';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-start-kit';
  constructor(
    private storage: StorageService,
    private appservice: AppService,
    private option: JWTOptions,
    private state: GlobalService
  ) {
    const obj = {
      userName: 'user11',
      password: 'a123456'
    };
    this.appservice.login(obj).subscribe((resp: any) => {
      this.storage.set(this.option.key, resp);
      this.appservice.getMenu().subscribe(i => { });
    });
  }
}
