import { LocalStorageService } from './local-storage.service';
import { NgModule } from '@angular/core';

/**
 * Local storage helper service.
 * Can store objects, retrieve them, clear them, and also delete them. This service will check if local storage is available on every request.
 * If local storage is not available, this will throw an exception. This serializes input data into json strings, and will deserialize output 
 * data back into objects.
 * 
 * @export
 * @class LocalStorageModule
 */
@NgModule({
    providers: [
        LocalStorageService
    ],
})
export class LocalStorageModule {}
