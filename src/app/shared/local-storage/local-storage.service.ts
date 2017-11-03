import { Injectable } from '@angular/core';

/**
 * Local storage provider.
 * 
 * @export
 * @class LocalStorageService
 * @template T 
 */
@Injectable()
export class LocalStorageService {

    /**
     * Clears the value.
     * 
     * @memberOf LocalStorageService
     */
    public clear(key: string): void {
        this.set(key, undefined);
    }

    /**
     * Deletes the key and value.
     * 
     * @returns {boolean} 
     * 
     * @memberOf LocalStorageService
     */
    public delete(key: string): boolean {
        this.canProceed(key);

        let currentCount = localStorage.length;
        localStorage.removeItem(key);
        return localStorage.length < currentCount;
    }

    /**
     * Gets the value out of storage or throws if the 
     * value is undefined.
     * 
     * @returns {T} 
     * 
     * @memberOf LocalStorageService
     */
    public getOrFail<T>(key: string): T {
        this.canProceed(key);

        let value = this.getOrUndefined(key);

        if (!value) {
            throw new Error(`Key '${key}' doesn't exist.`);
        }

        return <T>value;
    }

    /**
     * Gets the value out of storage.
     * 
     * @returns {T} 
     * 
     * @memberOf LocalStorageService
     */
    public getOrUndefined<T>(key: string): T {
        this.canProceed(key);

        let item = localStorage.getItem(key);
        return item ? <T>JSON.parse(item) : undefined;
    }


    /**
     * Checks if the key has a value.
     * 
     * @returns {boolean} 
     * 
     * @memberOf LocalStorageService
     */
    public hasValue(key: string): boolean {
        this.canProceed(key);

        let item = localStorage.getItem(key);

        return item !== undefined && item !== null;
    }

    /**
     * Stores the object.
     * 
     * @param {T} obj 
     * 
     * @memberOf LocalStorageService
     */
    public set<T>(key: string, obj: T): void {
        this.canProceed(key);

        let value = JSON.stringify(obj);
        localStorage.setItem(key, value);
    }

    /**
     * Check if the browser has localStorage enabled to avoid JS errors 
     * (happens most due to strict privacy settings or incognito mode)
     * 
     * @private
     * @returns {boolean} 
     * 
     * @memberOf LocalStorageService
     */
    private isStorageAvailable(): boolean {
        let test: string = 'availabilityCheck';
        try {
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch (e) {
            return false;
        }
    }


    /**
     * A check method that ensures there is a valid key
     * and that local storage is available.
     * @private
     * 
     * @memberOf LocalStorageService
     */
    private canProceed(key: string): void {
        if (!key) {
            throw new Error('A valid key must be set in order to use local storage.');
        }

        if (!this.isStorageAvailable()) {
            throw new Error('Local storage is currently not available.');
        }
    }
}

