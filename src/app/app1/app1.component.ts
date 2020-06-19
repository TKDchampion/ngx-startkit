import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'ngx-startkit';

@Component({
  selector: 'app-app1',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.scss']
})
export class App1Component implements OnInit {

  constructor(
    private global: GlobalService

  ) { }

  ngOnInit(): void {
    console.log(this.global.get());
  }

}
