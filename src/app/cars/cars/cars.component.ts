import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars = ['Fiat Panda', 'Renault Clio', 'Volkswagen Golf', 'Fiat Tipo', 'Audi A3', 'Renault Captur'];

  constructor() { }

  ngOnInit() {
  }

}
