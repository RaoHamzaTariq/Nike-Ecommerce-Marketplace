export interface Items{
    name: string;
    category: string;
    price: string;
    image: string;
}

export interface Product{
  name: string;
  tag:string;
  color:number
  category: string;
  price: number;
  image: string;
}

export const items:Items[] = [
    {
      name: "Nike Air Max Pulse",
      category: "Women's Shoes",
      price: "13 995",
      image: "nike-air-max-plus",
    },
    {
      name: "Nike Air Max 97",
      category: "Men's Shoes",
      price: "15 495",
      image: "nike-air-max-97",
    },
    {
      name: "Nike Air Max 90",
      category: "Unisex Shoes",
      price: "12 995",
      image: "nike-air-max-90",
    },
  ];


export const products:Product[] = [
  {
    "name": "Nike Air Force 1 Mid '07",
    "tag": "Men's Shoes",
    "color": 1, // Assuming this refers to a single color variant
    "category": "Shoes",
    "price": 10796.00,
    "image": "https://example.com/image1.jpg" // Replace with actual image URL
  },
  {
    "name": "Nike Court Vision Low Next Nature",
    "tag": "Men's Shoes",
    "color": 1, // Assuming this is a single color variant, or assign a specific color code
    "category": "Shoes",
    "price": 4995.00,
    "image": "https://example.com/image2.jpg"
  },
  // ... other products ...
]