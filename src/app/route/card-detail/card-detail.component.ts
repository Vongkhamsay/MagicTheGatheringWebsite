import { DialogDataExampleDialog } from './home-dialog';
import { Card } from './../../shared/models/card';
import { SearchService } from './../../shared/services/search.service';
import { HttpModule, Http } from '@angular/http';
import { Component, OnInit, Inject } from "@angular/core";

@Component({
    selector: "tyn-home",
    templateUrl: './home.component.html',
    styleUrls: ["./home.component.scss"]
})
export class CardDetailComponent implements OnInit {

    constructor(

    ) {

    }

    ngOnInit() {

    }
}


