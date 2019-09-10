import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpaHomeComponent } from './screens/empa-home/empa-home.component';

const routes: Routes = [
{ path: 'home', component: EmpaHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
