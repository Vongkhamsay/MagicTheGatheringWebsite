import { CardDetailComponent } from './card-detail.component';
import { AngularMaterialModule } from './../../shared/modules/angular-material-design';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SearchService } from '../../shared/export';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AngularMaterialModule,
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
export class HomeModule { }