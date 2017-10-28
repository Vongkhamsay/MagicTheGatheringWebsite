import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { SearchService } from '../../shared/export';

@NgModule({
    imports: [
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