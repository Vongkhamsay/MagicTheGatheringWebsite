import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { SearchService } from '../../shared/export';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    providers: [
        SearchService
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule { }