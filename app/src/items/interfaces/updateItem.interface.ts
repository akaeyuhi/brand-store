export interface UpdateItemInterface{
    name?: string;
    description?: string;
    rating?: number;
    price?: number;
    photo?: string;
    sex?: 'male' | 'female';
    discountPrice?: number;
    categories?: string[];
}