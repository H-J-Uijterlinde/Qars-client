import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarsComponent} from './cars/cars.component';
import {MatButtonModule, MatGridListModule} from '@angular/material';


@NgModule({
  declarations: [CarsComponent],
    imports: [
        CommonModule,
        MatGridListModule,
        MatButtonModule
    ]
})
export class CarsModule {
}
