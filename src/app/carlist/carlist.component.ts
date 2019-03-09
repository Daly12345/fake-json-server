import { Component, OnInit } from '@angular/core';
import { CarApiService } from '../car-api.service';
import { ICar } from '../icar';


@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css'],
  providers: [CarApiService]
})
export class CarlistComponent implements OnInit {
  carsData: ICar[];
  constructor(private _carAPIService: CarApiService) { }

  ngOnInit() {
    this._carAPIService.getCarData().subscribe(carsData => 
    { this.carsData = carsData });
        }
  }


