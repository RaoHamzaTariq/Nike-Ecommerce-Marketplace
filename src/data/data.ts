export interface Items{
    name: string;
    category: string;
    price: string;
    image: string;
}

export function isClerkError(error: unknown): error is { errors: { message: string }[] } {
  return (
    typeof error === 'object' &&
    error !== null &&
    'errors' in error &&
    Array.isArray((error as { errors: unknown }).errors) &&
    (error as { errors: { message: unknown }[] }).errors.every(
      (err) => typeof err.message === 'string'
    )
  );
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
    name: "Nike Air Force 1 Mid '07",
    tag: "Just In",
    color: 1,
    category: "Men's Shoes",
    price: 10796.00,
    image: "nike-air-force" 
  },
  {
    name: "Nike Court Vision Low Next Nature",
    tag: "Just In",
    color: 1, 
    category: "Men's Shoes",
    price: 4995.00,
    image: "nike-court"
  },
  {
    name: "Nike Air Force 1 PLT.AF.ORM",
    tag: "Just In",
    color: 1, 
    category: "Women's Shoes",
    price: 8695.00,
    image: "nike-air-force-plt"
  },
  {
    name: "Nike Air Force 1 React",
    tag: "Just In",
    color: 1, 
    category: "Men's Shoes",
    price: 13295.00,
    image: "nike-air-force-react"
  },
  {
    name: "Air Jordan 1 Elevate Low",
    tag: "Promo Exclusion",
    color: 1, 
    category: "Women's Shoes",
    price: 11895.00,
    image: "air-jorden-elevate"
  }, {
    name: "Nike Standard Issue",
    tag: "Just In",
    color: 1, 
    category: "Women's Basketball Jersey",
    price: 2895.00,
    image: "nike-standard"
  }, {
    name: "Nike Dunk Low Retro SE",
    tag: "Promo Exclusion",
    color: 1, 
    category: "Men's Shoes",
    price: 9695.00,
    image: "nike-dunk"
  }, {
    name: "Nike Dri-FIT UV Hyverse",
    tag: "Sustainable Materials",
    color: 1, 
    category: "Men's Short-Sleeve Graphic Fitness Top",
    price: 2495.00,
    image: "nike-dri-fit"
  },{
    name: "Nike Air Force 1 '07",
    tag: "Just In",
    color: 2,
    category: "Women's Shoes",
    price: 8195.00,
    image: "nike-air-force-07"
  },{
    name: "Nike Pro Dri-FIT",
    tag: "Just In",
    color: 1,
    category: "Men's Tight-Fit Sleeveless Top",
    price: 1495.00,
    image: "nike-pro-dry-fit"
  },{
    name: "Nike Dunk Low Retro",
    tag: "Just In",
    color: 1,
    category: "Men's Shoes",
    price: 8695.00,
    image: "nike-dunk-low"
  },{
    name: "Nike Air Max SC",
    tag: "Just In",
    color: 2,
    category: "Women's Shoes",
    price: 5995.00,
    image: "nike-air-max"
  },{
    name: "Nike Dri-FIT UV Miler",
    tag: "Just In",
    color: 1,
    category: "Men's Short-Sleeve Running Top",
    price: 1695.00,
    image: "nike-dri-fit-uv-miler"
  },{
    name: "Nike Air Max SYSTM",
    tag: "Just In",
    color: 1,
    category: "Older Kids' Shoes",
    price: 6495.00,
    image: "nike-air-max-systm"
  },{
    name: "Nike Alate All U",
    tag: "Just In",
    color: 1,
    category: "Women's Light-Support Lightly Lined U-Neck Printed Sports Bra",
    price: 2195.00,
    image: "nike-alate"
  },{
    name: "Nike Dri-FIT Run Division Rise 365",
    tag: "Just In",
    color: 2,
    category: "Men's Running Tank",
    price: 3495.00,
    image: "nike-dri-fit-run"
  },{
    name: "Nike SB Zoom Janoski OG+",
    tag: "Just In",
    color: 1,
    category: "Shoes",
    price: 8595.00,
    image: "nike-sb-zoom"
  },{
    name: "Nike Blazer Low '77 Jumbo",
    tag: "Just In",
    color: 1,
    category: "Women's Shoes",
    price: 8595.00,
    image: "nike-blzer-low"
  },
  {
    name: "Nike SB Force 58",
    tag: "Just In",
    color: 1,
    category: "Skate Shoe",
    price: 5995.00,
    image: "nike-sb-force"
  }, {
    name: "Nike Outdoor Play",
    tag: "Just In",
    color: 1,
    category: "Older Kids' Oversized Woven Jacket",
    price: 3895.00,
    image: "nike-outdoor"
  }, {
    name: "Jordan Why Not 6 .PF",
    tag: "Just In",
    color: 2,
    category: "Men's Shoes",
    price: 13995.00,
    image: "jorden-whynot"
  },{
    name: "Air Jordan 1 Mid",
    tag: "Promo Exclusion",
    color: 1,
    category: "Women's Shoes",
    price: 11495.00,
    image: "air-jorden-mid"
  },{
    name: "Air Jordan 1 Mid",
    tag: "Promo Exclusion",
    color: 1,
    category: "Women's Shoes",
    price: 11495.00,
    image: "air-jorden-mid"
  },{
    name: "Air Max 90 SE",
    tag: "Just In",
    color: 1,
    category: "Men's Shoes",
    price: 12795.00,
    image: "nike-air-max-90-se"
  },{
    name: "Nike One Leak Protection: Period",
    tag: "Just In",
    color: 2,
    category: "Women's Mid-Rise 18cm (approx.) Biker Shorts",
    price: 7495.00,
    image: "nike-one-leak"
  },
  {
    name: "Nike Dri-FIT Ready",
    tag: "Just In",
    color: 3,
    category: "Men's Short-Sleeve Fitness Top",
    price: 2495.00,
    image: "nike-dri-fit-ready"
  },{
    name: "Nike Invincible 3 By You",
    tag: "Just In",
    color: 6,
    category: "Custom Men's Road Running Shoes",
    price: 19295.00,
    image: "nike-invincible"
  },{
    name: "Nike Air Max 90 Futura By You",
    tag: "Just In",
    color: 6,
    category: "Custom Men's Road Running Shoes",
    price: 17295.00,
    image: "nike-air-max-90"
  },{
    name: "Nike Pegasus Trial 4 GORE-TEX",
    tag: "Just In",
    color: 1,
    category: "Men's Waterproof Trial Running Shoes",
    price: 14995.00,
    image: "nike-pegasus"
  },{
    name: "Jordan Delta 3 Low SE",
    tag: "Just In",
    color: 1,
    category: "Women's Shoes",
    price: 12795.00,
    image: "jorden-delta-low"
  } 
]