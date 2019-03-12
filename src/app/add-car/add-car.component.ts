import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Car } from '../car';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  @Output() addCarEE: EventEmitter<any> = new EventEmitter();
  show: boolean = false;

  constructor() { }


  addCar(make:string, model:string, year:string,imageUrl:string):boolean{
    let tempCar = new Car(make,model,year,imageUrl);
    this.addCarEE.emit(tempCar);
    return false;
  }

  ngOnInit() {
  }

}
