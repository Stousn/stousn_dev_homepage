import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Globals } from './globals';
import { DisclaimerComponent } from './layout/disclaimer/disclaimer.component';
import { Error404Component } from './layout/error404/error404.component';
import { HomeComponent } from './layout/home/home.component';
import { ImprintComponent } from './layout/imprint/imprint.component';
import { LayoutComponent } from './layout/layout.component';
import { PrivacyComponent } from './layout/privacy/privacy.component';
import { ProjectsModule } from './layout/projects/projects.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [AppComponent, LayoutComponent, HomeComponent, ImprintComponent, DisclaimerComponent, PrivacyComponent, Error404Component],
    imports: [BrowserModule, AppRoutingModule, RouterModule, ProjectsModule, SharedModule],
    providers: [Globals],
    bootstrap: [AppComponent]
})
export class AppModule {}
