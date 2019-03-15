export interface ICar {
    make: string;
    model: string;
    year: string,
    imageURL: string;
    quality: ICarQuality[];
    myReview: string;
   
    }




export interface ICarQuality {
    name: string;
    rating: string;

}
