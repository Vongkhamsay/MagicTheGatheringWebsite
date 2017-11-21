import { SearchBarModule } from './../../shared/search-bar/search-bar.module';
import { CardDetailRoutingModule } from './card-detail-routing.module';
import { CardDetailComponent } from './card-details/card-detail.component';
import { AngularMaterialModule } from './../../shared/modules/angular-material-design';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SearchService } from '../../shared/export';
import { DetailsTabsModule } from './../../shared/details-tabs/details-tabs.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AngularMaterialModule,
        CardDetailRoutingModule,
        SearchBarModule,
        DetailsTabsModule
    ],
    providers: [
        SearchService
    ],
    declarations: [
        CardDetailComponent,
    ],
    exports: [
        CardDetailComponent,
    ]
})
export class CardDetailModule { }