import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { DailyComponent } from './daily/daily.component';
import { TableComponent } from './table/table.component';

@NgModule({
  // all components are declare here
  declarations: [
    AppComponent,
    TestComponent,
    DailyComponent,
    TableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
