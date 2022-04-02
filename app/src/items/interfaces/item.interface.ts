export interface ItemInterface{
    name: string;
    description: string;
    price: number;
    rating: number;
    photo: string;
    sex: 'male' | 'female';
    discountPrice?: number;
    categories?: string[];
}