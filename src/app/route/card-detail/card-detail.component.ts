import { CardDetailStateService } from './../../shared/card-detail-state/card-detail-state.service';
import { Card } from './../../shared/models/card';
import { SearchService } from './../../shared/services/search.service';
import { HttpModule, Http } from '@angular/http';
import { Component, OnInit, Inject } from "@angular/core";

@Component({
    templateUrl: './card-detail.component.html',
    styleUrls: ["./card-detail.component.scss"]
})
export class CardDetailComponent implements OnInit {

    card: Card;

    constructor(
        private cardDetailState: CardDetailStateService
    ) {

        this.cardDetailState.watch.subscribe((response) => {
            this.card = response;
        })
    }

    ngOnInit() {

    }
}


