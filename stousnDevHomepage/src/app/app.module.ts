;
import { Error404Component } from './layout/error404/error404.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './layout/home/home.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { SharedModule } from './shared/shared.module';
import { ImprintComponent } from './layout/imprint/imprint.component';
import { DisclaimerComponent } from './layout/disclaimer/disclaimer.component';
import { PrivacyComponent } from './layout/privacy/privacy.component';
import { ProjectsModule } from './layout/projects/projects.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    ImprintComponent,
    DisclaimerComponent,
    PrivacyComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ProjectsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
