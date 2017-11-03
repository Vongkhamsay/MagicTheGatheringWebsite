import { ExpiringLocalStorageStateService } from './../models/expiring-local-storage-state-service';
import { SearchService } from './../services/search.service';

import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Card } from '../Models/card';


@Injectable()
export class CardDetailStateService extends ExpiringLocalStorageStateService<Card>{

    private stateSub: BehaviorSubject<Card> = new BehaviorSubject<Card>(this.value);

    public get watch(): Observable<Card> {
        return this.stateSub.asObservable();
    }

    constructor(
        localStorage: LocalStorageService,
        private service: SearchService
    ) {
        super(localStorage, 'carddetail', 50000);
    }

    public load(): void {
        super.load();

        if (this.value) {
            this.value = new Card(this.value);
        }
    }

    public apply(state: Card): void {
        super.apply(state);
        this.stateSub.next(state);
    }

    public clear(): void {
        super.clear();
        this.stateSub.next(<Card>undefined);
    }
}
