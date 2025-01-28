import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { FaShoppingCart, FaHeart } from 'react-icons/fa'

const ProductCard = (props: {
  inventory: number,
  image: SanityImageSource,
  name: string,
  status: string,
  category: string,
  color: number,
  price: number
}) => {
  return (
    <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
      {/* Stock Status Badge */}
      <div className="absolute top-3 left-3 z-10">
        <p className={`
          ${props.inventory > 0 
            ? "text-white bg-black" 
            : "bg-red-100 text-red-700"} 
          text-xs rounded-md px-2 py-1
        `}>
          {props.inventory > 0 ? "In Stock" : "Sold Out"}
        </p>
      </div>

      

      {/* Product Image */}
      <div className="relative w-full h-[348px] overflow-hidden">
        <Image 
          src={
            props.image
              ? urlFor(props.image).url()
              : "/default-image.png"
          } 
          alt={`${props.name} Image`} 
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-5 bg-white">
        <div className="flex flex-col justify-between gap-3">
          <div>
            <p className='text-[#9E3500] text-sm'>{props.status}</p>
            <h2 className='text-[#111111] font-bold text-base'>{props.name}</h2>
            <p className='text-[#757575] font-normal text-sm'>{props.category}</p>
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <p className='text-[#757575] text-sm'>{props.color} Colour</p>
              <p className='text-[#111111] font-medium'>{`MRP : PKR ${props.price}.00`}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2">
              <button 
                className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-colors"
                aria-label="Add to Cart"
              >
                <FaShoppingCart />
              </button>
              <button 
                className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                aria-label="Add to Wishlist"
              >
                <FaHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
