import { CardDetailStateService } from './../card-detail-state/card-detail-state.service';
import { Card } from './../../shared/models/card';
import { SearchService } from './../../shared/services/search.service';
import { HttpModule, Http } from '@angular/http';
import { Component, OnInit, Inject } from "@angular/core";
import { Observable } from 'rxjs/Rx';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
    selector: "search-bar",
    templateUrl: './search-bar.component.html',
    styleUrls: ["./search-bar.component.scss"]
})
export class SearchBarComponent implements OnInit {
    x: Card[];
    image: string;
    form: FormGroup;
    constructor(
        private searchService: SearchService,
        private formBuilder: FormBuilder,
        private dialog: MatDialog,
        private router: Router,
        private cardStateService: CardDetailStateService
    ) {

    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            name: ['', Validators.required]
        });

        this.form.controls['name'].valueChanges.debounceTime(200).subscribe(form => {
            this.getCards();
        });
    }

    // Get a list of cards based on filter
    getCards() {
        this.searchService.getCards(this.form.value.name).subscribe((response: Card[]) => {
            this.x = response;
            debugger;
        })
    }

    // Get selected card details
    getCard(card: Card) {
        this.cardStateService.apply(card);
        this.router.navigate(['details']);
    }

}


