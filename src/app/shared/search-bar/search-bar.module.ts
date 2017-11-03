import { CardDetailStateModule } from './../card-detail-state/card-detail-state.module';
import { SearchService } from './../services/search.service';
import { AngularMaterialModule } from './../modules/angular-material-design';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AngularMaterialModule,
        CardDetailStateModule
    ],
    providers: [
        SearchService
    ],
    declarations: [SearchBarComponent],
    exports: [SearchBarComponent]
})
export class SearchBarModule { }