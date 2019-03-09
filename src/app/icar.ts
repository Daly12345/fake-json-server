export interface ICar {
    make: string;
    model: string;
    year: string,
    imageURL: string;
    quality: ICarQuality[];
}

interface ICarQuality {
    name: string;
    rating: string;

}
