import React from 'react'
import Image from 'next/image'
import { Items } from '@/data/data'

const BestOfAirMax = (props:Items) => {
  return (
    <div className='flex flex-col gap-5 min-w-60'>
        <div className=''>
        <Image src={`/Images/home/${props.image}.png`} alt={"Hero Image"} width={442} height={442}/>
        </div>
        <div className='flex justify-between'>
            <div className='text-base '>
                <h3 className='font-medium'>{props.name}</h3>
                <h4 className='max-w-[220px]'>{props.category}</h4>
            </div>
            <p className='font-medium'>₹{props.price}</p>
        </div>
    </div>
  )
}

export default BestOfAirMax