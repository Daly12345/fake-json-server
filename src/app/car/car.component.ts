import { Component, OnInit, Input } from '@angular/core';
import { ICar } from '../icar';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input() carData:ICar;
  carImageWidth:number = 300;

  constructor() { }

  addReview(review:string):boolean{
    console.log("CarComponent: addReview: review = "+review)
    this.carData.myReview=review;
    return false;
  }

  ngOnInit() {
  }

}
