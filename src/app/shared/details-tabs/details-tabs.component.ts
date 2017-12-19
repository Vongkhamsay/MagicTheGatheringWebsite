import { CardDetailStateService } from './../card-detail-state/card-detail-state.service';
import { Card } from './../models/card';
import { Component, OnInit, Inject } from "@angular/core";

@Component({
    selector: "details-tabs",
    templateUrl: './details-tabs.component.html',
    styleUrls: ['./details-tabs.component.scss']
})
export class DetailsTabsComponent implements OnInit {

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


