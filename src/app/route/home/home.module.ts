import { HomeRoutingModule } from './home-routing.module';
import { SearchBarModule } from './../../shared/search-bar/search-bar.module';
import { AngularMaterialModule } from './../../shared/modules/angular-material-design';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { SearchService } from '../../shared/export';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AngularMaterialModule,
        HomeRoutingModule,
        SearchBarModule
    ],
    providers: [
        SearchService
    ],
    declarations: [
        HomeComponent,
    ],
    exports: [
        HomeComponent,
    ],
    entryComponents: [
    ]
})
export class HomeModule { }