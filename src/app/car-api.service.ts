import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ICar } from './icar';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Car } from './car';

@Injectable()
export class CarApiService {

  //url to the fake JSON server
  private _siteURL = 'http://localhost:3000/car_data';

  //Service Wrapper around the native firestores SDK's
  // CollectionReference and Query types.
  carsDataCollection: AngularFirestoreCollection<ICar>;
  
  // A repersentation of any set of Products over any amount of time.
  carsData: Observable<ICar[]>;

  // Array to hold all products
  allCarsData: ICar[];
  
  //Holds the error message
  errorMessage: string;

  constructor(private _http: HttpClient, private _afs: AngularFirestore) { 
    //connect to database 
    this.carsDataCollection = _afs.collection<ICar>("cars_data");
  }

  getCarData(): Observable<ICar[]> {
    //valueChanged() reruns the current state of the collection as
    // an Observable of data as a synchronised array of JSON objects
    this.carsData = this.carsDataCollection.valueChanges();

    //As the data is now available asa an Observable just subscribe and the data will start to flow.
    //Also output the data to the console.
    this.carsData.subscribe(data => console.log("getCarsData: " +JSON.stringify(data)))
    return this.carsData;

  }


    addCarData(car: ICar): void {
      //Firebase throws an error if the car object is passed directly. A solution/hack
      //is to stringify and parse the data into a raw object and pass it this way
      this.carsDataCollection.add(JSON.parse(JSON.stringify(car))); 
    }

    addTheCar(make:string, model:string, year:string, imageURL:string): boolean{
      let tempCar:ICar;
      tempCar = new Car(make,model,year,imageURL);
      this._carAPIService.addCarData(tempCar);
      return false;
      
    }

    addAllProducts(){
      this._http.get<ICar[]>(this._siteURL).subscribe(
        carsData => { 
          this.allCarsData = carsData;
          for (let car of this.allCarsData) {
            console.log("Adding: Make: " + car.make + "- Model: " + car.model);
            this.carsDataCollection.add(car);
          }
        },
        error => (this.errorMessage = <any>error)
        
      );
    }

  // getCarData(): Observable<ICar[]> {
  //   return this._http.get<ICar[]>(this._siteURL).pipe(
  //     tap(data => console.log('All: ' + JSON.stringify(data))),
  //     catchError(this.handleError));
  // }

  private handleError(err: HttpErrorResponse) {
    console.log('CarApiService: ' + err.message);
    return Observable.throw(err.message);
  }

}


