import { Component, OnInit, Inject } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';


@Component({
    selector: 'dialog-data-example-dialog',
    templateUrl: 'home-dialog.html',
    styleUrls: ["./home-dialog.scss"]
    
  })
  export class DialogDataExampleDialog {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  }