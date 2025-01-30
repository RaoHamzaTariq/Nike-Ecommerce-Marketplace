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

export interface Wishlist {
  _ref:string,
  _key:string,
  _type: string,
}

export interface WishlistProduct {
  _id: string;
  productName: string;
  price: number;
  imageUrl?: string;
  slug : {
    current: string;
    _type:string
  }
}

export interface User {
    firstName: string;
    gender: 'Male' | 'Female';
    dateOfBirth: string;
    _id: string;
    email: string;
    country: string;
    lastName: string;
    wishList:Wishlist[]
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

export interface Order {
    _id: string;
    customerName: string;
    customer_id: string;
    email: string;
    completionStatus: 'pending' | 'processing' | 'completed' | 'cancelled';
    orderDate: string;
    paymentStatus: 'paid' | 'unpaid' | 'refunded';
    productDetails: {
      quantity: number;
      productName: string;
      productPrice: number;
      productImage: string;
      productSubtotal: number;
    }[];
    totalAmount?: number;
  }