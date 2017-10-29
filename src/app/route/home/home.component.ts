import { DialogDataExampleDialog } from './home-dialog';
import { Card } from './../../shared/models/card';
import { SearchService } from './../../shared/services/search.service';
import { HttpModule, Http } from '@angular/http';
import { Component, OnInit, Inject } from "@angular/core";
import { Observable } from 'rxjs/Rx';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

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
        private formBuilder: FormBuilder,
        private dialog: MatDialog,
    ) {

    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            name: ['', Validators.required]
        });

        this.form.controls['name'].valueChanges.debounceTime(500).subscribe(form => {
            this.getCards();
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
        this.openDialog();
    }

    openDialog(): void {
        debugger;
        let dialogRef = this.dialog.open(DialogDataExampleDialog, {
            width: '250px',
            data: { imageUrl: this.image }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
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


