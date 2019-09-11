import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpaHomeComponent } from './screens/empa-home/empa-home.component';
import { EmpaSigninComponent } from './screens/empa-signin/empa-signin.component';

const routes: Routes = [
{ path: 'home', component: EmpaHomeComponent },
{ path: 'ingresar', component: EmpaSigninComponent },
{ path: '', redirectTo: 'home', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
