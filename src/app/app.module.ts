import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpaHomeComponent } from './screens/empa-home/empa-home.component';
import { EmpaNavbarsComponent } from './components/empa-navbars/empa-navbars.component';
import { EmpaFooterComponent } from './components/empa-footer/empa-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpaHomeComponent,
    EmpaNavbarsComponent,
    EmpaFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
