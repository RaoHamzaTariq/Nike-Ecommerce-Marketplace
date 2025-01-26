import { SanityImageSource } from "@sanity/image-url/lib/types/types";


export interface Product {
    _id: string;
    productName: string;
    price: number;
    inventory: number;
    category: string;
    colors: string[];
    status: string;
    createdAt: Date;
    updatedAt: Date;
    image: SanityImageSource;
    description: string;
    reviews:Comment[]
    slug: {
        current: string;
        type: string;
    };
}

export interface User {
    firstName: string;
    gender: 'Male' | 'Female';
    dateOfBirth: string;
    _id: string;
    email: string;
    country: string;
    lastName: string;
    wishList:string[]
  }
  

  export interface CartProducts {
    id: string;
    quantity: number;
    price: number;
    productName: string;
    color:string[]
    image: SanityImageSource;
    category: string;
    subTotal:number,
    slug:string,
  }

  export interface Comment { 
    rating: number;             
    customerName: string;   
    comment: string;
  }
