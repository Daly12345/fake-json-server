export interface ICar {
    make: string;
    model: string;
    year: string,
    imageURL: string;
    quality: ICarQuality[];
}

interface IcarQuality {
    name: string;
    rating: string;

}
