import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'mtg-header',
  template: require('./header.component.html'),
  styles: [require('./header.component.scss')],
})

export class HeaderComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit() { }

  routeHome(){
    this.route.navigate(['home']);
  }

}