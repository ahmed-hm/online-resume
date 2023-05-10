import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule {}
