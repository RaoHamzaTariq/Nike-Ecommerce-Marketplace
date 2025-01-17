import { SanityImageSource } from "@sanity/image-url/lib/types/types";


export interface Product {
    id: string;
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
    slug: {
        current: string;
        type: string;
    };
}

export interface User {
    _updatedAt: string;
    firstName: string;
    password: string;
    gender: 'Male' | 'Female';
    _createdAt: string;
    _type: 'user';
    dateOfBirth: string;
    _id: string;
    email: string;
    country: string;
    lastName: string;
    _rev: string;
  }
  

  export interface CartProducts {
    // id: string;
    quantity: number;
    price: number;
    productName: string;
    color:string[]
    image: SanityImageSource;
    category: string;
    subTotal:number,
    slug:string
  }