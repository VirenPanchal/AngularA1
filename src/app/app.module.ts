import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTabsModule } from '@angular/material/tabs';
import { HeaderPanvirenComponent } from './header-panviren/header-panviren.component';
import { PanvirenAboutComponent } from './panviren-about/panviren-about.component';
import { PanvirenCountryComponent } from './panviren-country/panviren-country.component';
import { PanvirenPicsComponent } from './panviren-pics/panviren-pics.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPanvirenComponent,
    PanvirenAboutComponent,
    PanvirenCountryComponent,
    PanvirenPicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
