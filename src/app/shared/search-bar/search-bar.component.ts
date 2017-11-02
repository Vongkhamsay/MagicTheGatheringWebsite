import { Card } from './../../shared/models/card';
import { SearchService } from './../../shared/services/search.service';
import { HttpModule, Http } from '@angular/http';
import { Component, OnInit, Inject } from "@angular/core";
import { Observable } from 'rxjs/Rx';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

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

    getCards() {
        this.searchService.getCards(this.form.value.name).subscribe((response: Card[]) => {
            this.x = response;
            debugger;
        })
    }

}


