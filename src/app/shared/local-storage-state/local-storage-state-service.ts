import { LocalStorageService } from './../local-storage/local-storage.service';
import { StateServiceBase } from './state-service-base';
export class LocalStorageStateService<T> extends StateServiceBase<T> {
    
        constructor(
            protected localStorage: LocalStorageService,
            protected key: string,
        ) {
            super();
            this.load();
        }
    
        public apply(value: T): void {
            super.apply(value);
            this.localStorage.set(this.key, this.value);
        };
    
        public clear(): void {
            super.clear();
            this.localStorage.delete(this.key);
        }
    
        public load(): void {
            this.value = this.localStorage.getOrUndefined<T>(this.key);
        }
    }