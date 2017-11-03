import { LocalStorageStateService } from './../local-storage-state/local-storage-state-service';
import { LocalStorageService } from '../local-storage/local-storage.service';


export class ExpiringLocalStorageStateService<T> extends LocalStorageStateService<T> {
    
        private expiresLocalStorage: LocalStorageStateService<number>;
    
        constructor(
            localStorage: LocalStorageService,
            key: string,
            private timeToLiveInMinutes: number
        ) {
            super(localStorage, key);
        }
    
        public clear(): void {
            super.clear();
            this.expiresLocalStorage.clear();
        }
    
        public apply(value: T): void {
            super.apply(value);
            this.expiresLocalStorage.apply(Date.now() + (this.timeToLiveInMinutes * 60000));
        }
    
        public load(): void {
            super.load();
    
            if (!this.expiresLocalStorage) {
                this.expiresLocalStorage = this.expiresLocalStorage = new LocalStorageStateService<number>(this.localStorage, this.key + 'expires');
            }
    
            this.expiresLocalStorage.load();
    
            if (this.isStale()) {
                super.clear();
                this.expiresLocalStorage.clear();
            }
        }
    
        private isStale(): boolean {
            return Date.now() > this.expiresLocalStorage.value;
        }
    }