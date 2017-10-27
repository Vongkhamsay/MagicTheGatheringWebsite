import { HttpModule, Http } from '@angular/http';
import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs/Rx';
@Component({
    selector: "tyn-home",
    templateUrl: './home.component.html',
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
    x: any;
    z: Observable<any> = new Observable;
    constructor(
        private http: Http
    ) {

    }

    ngOnInit() {

    }

    getCards() {
        this.getCard().subscribe((response) => {
            debugger;
            this.x = response.cards[0];
        });
    }

    getCard(): Observable<any> {
        let y: any;
        const endpoint = 'https://api.magicthegathering.io/v1/cards';

        return this.http
            .get(endpoint)//, {search: searchParams})
            .map((res: any) => {
                return res.json()
            })
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


}