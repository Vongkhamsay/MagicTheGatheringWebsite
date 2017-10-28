import { Card } from './../../shared/Models/card';
import { SearchService } from './../../shared/services/search.service';
import { HttpModule, Http } from '@angular/http';
import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs/Rx';

@Component({
    selector: "tyn-home",
    templateUrl: './home.component.html',
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
    y: Card[];
    x: Card;
    constructor(
        private http: Http,
        private searchService: SearchService
    ) {

    }

    ngOnInit() {

    }

    getCards() {
        this.searchService.getCards().subscribe((response: Card[]) => {
            this.y = response;
            this.x = response[0];
        })
    }

    // fetch('https://api.magicthegathering.io/v1/cards')
    //     .then(function (response) {
    //         debugger
    //         return response.json()
    //     }).then(function (json) {
    //         console.log('parsed json', json)
    //         y = json;
    //         return y;
    //     }).catch(function (ex) {
    //         console.log('parsing failed', ex)
    //         y = ex;
    //     })
}


