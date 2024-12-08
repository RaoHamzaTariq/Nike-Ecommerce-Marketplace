import React from 'react'
import Image from 'next/image'
import { Product } from '@/data/data'

const ProductCard = (props:Product) => {
  return (
    
    <div className='flex flex-col gap-5 max-w-[348px]'>
        <div className=''>
      <Image src={`/Images/products/${props.image}.png`} alt={`${props.name} Image`} width={348} height={348}/>
        </div>
        <div className='flex flex-col justify-between'>
                <ul>
                    <p>{props.tag}</p>
                    <p>{props.name}</p>
                    <p>{props.category}</p>
                </ul>
                <p>{props.color} Colour</p>
                <p>{`MRP : ₹ ${props.price}`}</p>
        </div>
    </div>
  )
}


export default ProductCard