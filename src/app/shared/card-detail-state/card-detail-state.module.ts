import { LocalStorageModule } from './../local-storage/local-storage.module';
import { CardDetailStateService } from './card-detail-state.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Card } from '../Models/card';


@NgModule({
    imports: [
        LocalStorageModule,
    ],
    providers: [CardDetailStateService],
    declarations: [],
    exports: []
})
export class CardDetailStateModule { }