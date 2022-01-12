import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MenuComponent } from './menu/menu.component';
import { HaendlerComponent } from './sites/haendler/haendler.component';
import { AutosComponent } from './sites/autos/autos.component';
import { PersonComponent } from './sites/person/person.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    NgxNavbarModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    MenuComponent,
    HaendlerComponent,
    AutosComponent,
    PersonComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
