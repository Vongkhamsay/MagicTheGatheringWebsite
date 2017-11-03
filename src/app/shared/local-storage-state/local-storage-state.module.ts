import { StateService } from './state-service';
import { LocalStorageStateService } from './local-storage-state-service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    imports: [],
    providers: [
        LocalStorageStateService],
    declarations: [],
    exports: []
})
export class LocalStorageStateModule { }