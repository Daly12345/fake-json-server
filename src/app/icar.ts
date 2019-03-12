export interface ICar {
    make: string;
    model: string;
    year: string,
    imageURL: string;
    quality: ICarQuality[];

   
    }




export interface ICarQuality {
    name: string;
    rating: string;

}
