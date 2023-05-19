import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AngularSvgIconPreloaderModule } from 'angular-svg-icon-preloader';

import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { InfoComponent } from './components/info/info.component';
import { MainComponent } from './components/main/main.component';
import { SplitCardComponent } from './components/split-card/split-card.component';

@NgModule({
  declarations: [MainComponent, HeaderComponent, FooterComponent, SplitCardComponent, InfoComponent],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    AngularSvgIconModule.forRoot(),
    AngularSvgIconPreloaderModule.forRoot({ configUrl: 'assets/icons/svg-icons-config.json' })
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule {}
