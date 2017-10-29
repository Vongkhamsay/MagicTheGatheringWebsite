import { Card } from './../Models/card';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

const cardsUri = 'https://api.magicthegathering.io/v1/cards?name=';

@Injectable()
export class SearchService {

    constructor(
        private http: Http
    ) {

    }

    public getCards(cardName: string): Observable<Card[]> {
        debugger;
        let cards: Card[];
        return this.http.get(cardsUri + cardName).map((response: any) => {
            cards = response.json().cards;
            return cards;
        });
    }
}