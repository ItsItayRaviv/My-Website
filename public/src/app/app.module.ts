import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SocialsComponent } from './socials/socials.component';
import { ArtComponent } from './about/art/art.component';
import { CodeComponent } from './about/code/code.component';
import { LanguageComponent } from './about/language/language.component';
import { ArtimgComponent } from './reusbales/artimg/artimg.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SocialsComponent,
    ArtComponent,
    CodeComponent,
    LanguageComponent,
    ArtimgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
