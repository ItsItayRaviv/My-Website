import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SocialsComponent } from './socials/socials.component';
import { ArtComponent } from './about/art/art.component';
import { CodeComponent } from './about/code/code.component';
import { LanguageComponent } from './about/language/language.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'socials', component: SocialsComponent },
  { path: 'about', component: AboutComponent }, 
  { path: 'about/art', component: ArtComponent },
  { path: 'about/code', component: CodeComponent },
  { path: 'about/language', component: LanguageComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }