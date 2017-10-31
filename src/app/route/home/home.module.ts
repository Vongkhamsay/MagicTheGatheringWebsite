import { DialogDataExampleDialog } from './home-dialog';
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
    ],
    providers: [
        SearchService
    ],
    declarations: [
        HomeComponent,
        DialogDataExampleDialog
    ],
    exports: [
        HomeComponent,
    ],
    entryComponents: [
        DialogDataExampleDialog
    ]
})
export class HomeModule { }