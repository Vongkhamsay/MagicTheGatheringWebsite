import { Card } from './../../shared/models/card';
import { SearchService } from './../../shared/services/search.service';
import { HttpModule, Http } from '@angular/http';
import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs/Rx';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
    selector: "tyn-home",
    templateUrl: './home.component.html',
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
    y: Card[];
    x: Card[];
    image: string;
    form: FormGroup;
    constructor(
        private http: Http,
        private searchService: SearchService,
        private formBuilder: FormBuilder
    ) {

    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            name: ['', Validators.required]
        });
    }

    getCards() {
        this.searchService.getCards(this.form.value.name).subscribe((response: Card[]) => {
            this.y = response;
            this.x = response;
            debugger;
        })
    }

    getCard(card: Card) {
        this.image = card.imageUrl;
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


