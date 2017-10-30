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

    getCard(card: Card) {
        this.openDialog(card);
    }

    openDialog(card: Card): void {
        debugger;
        let dialogRef = this.dialog.open(DialogDataExampleDialog, {
            width: '250px',
            data: { card: card }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}


