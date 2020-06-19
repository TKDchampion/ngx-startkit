import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { App1Component } from './app1/app1.component';


const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
