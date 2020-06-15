import { Component } from '@angular/core';
import { Storage } from 'ngx-startkit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-start-kit';
  constructor(
    private storage: Storage
    ) {  }
}
