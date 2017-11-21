import { CardDetailStateModule } from './../card-detail-state/card-detail-state.module';
import { SearchService } from './../services/search.service';
import { AngularMaterialModule } from './../modules/angular-material-design';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsTabsComponent } from './details-tabs.component';
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
    declarations: [DetailsTabsComponent],
    exports: [DetailsTabsComponent]
})
export class DetailsTabsModule { }