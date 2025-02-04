import React from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { addToWishlist } from './Functions/wishlist';

const ProductCard = (props: {
  inventory: number,
  image: SanityImageSource,
  name: string,
  status: string,
  category: string,
  color: number,
  price: number,
  _id: string
}) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      {/* Stock Status Badge */}
      <div className="absolute top-3 left-3 z-10">
        <p className={`text-xs rounded-md px-2 py-1 ${props.inventory > 0 ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
          {props.inventory > 0 ? "In Stock" : "Sold Out"}
        </p>
      </div>

      {/* Product Image */}
      <div className="relative w-full h-[348px] overflow-hidden">
        <Image 
          src={props.image ? urlFor(props.image).url() : "/default-image.png"} 
          alt={`${props.name} Image`} 
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Product Details */}
      <div className="p-5 bg-white">
        <div className="flex flex-col justify-between gap-3">
          <div>
            <p className='text-gray-500 text-sm'>{props.status}</p>
            <h2 className='text-gray-900 font-bold text-lg'>{props.name}</h2>
            <p className='text-gray-600 font-normal text-sm'>{props.category}</p>
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <p className='text-gray-600 text-sm'>{props.color} Colour</p>
              <p className='text-gray-900 font-medium'>{`MRP : PKR ${props.price}.00`}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2">
              <button 
                className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-colors flex items-center"
                aria-label="Add to Cart"
              >
                <FaShoppingCart />
              </button>
              <button 
                onClick={() => { addToWishlist(props._id) }}
                className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors flex items-center"
                aria-label="Add to Wishlist"
              >
                <FaHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
