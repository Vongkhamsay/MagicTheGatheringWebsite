import { DialogDataExampleDialog } from './../../route/home/home-dialog';
import { MatDialog } from '@angular/material';
import { SearchService } from './../services/search.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card';


@Component({
  selector: 'mtg-header',
  template: require('./header.component.html'),
  styles: [require('./header.component.scss')],
})

export class HeaderComponent implements OnInit {

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