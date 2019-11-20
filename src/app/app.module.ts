import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CoreModule } from './_core/core.module';
import { TetrisModule } from './tetris/tetris.module';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    CoreModule,
    AppRoutingModule,
    TetrisModule,
  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
