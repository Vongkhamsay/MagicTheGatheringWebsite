import { HeaderModule } from './shared/header/header.module';
import { HomeModule } from './route/home/home.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_ROUTING } from './app.routing';
import { HomeComponent } from './route/home/home.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        APP_ROUTING,
        HomeModule,
        HeaderModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }