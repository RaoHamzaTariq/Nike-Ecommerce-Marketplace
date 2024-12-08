import React from 'react'
import Image from 'next/image'
import { TbShoppingCart } from 'react-icons/tb'

const ProductDetail = () => {
  return (
    <div className='flex flex-col md:flex-row lg:gap-[137] md:gap-10 gap-16 justify-between xl:mx-40 lg:mx-32 md:mx-20 mx-10 lg:my-32 md:my-24 sm:my-16 my-10'>
        <Image src={`/Images/product-details/Rectangle.png`} className='' alt={"Hero Image"} width={700} height={700}/>
        <div className='font-poppins flex flex-col items-center md:items-start gap-7'>
            <h1 className='max-w-[367px] leading-[48px] text-4xl sm:text-5xl font-medium md:text-left text-center'>{"Nike Air Force 1 PLT.AF.ORM"}</h1>
            <p className='text-base md:text-left text-center'>{`Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.`}</p>
            <h3 className='text-4xl font-medium md:text-left text-center'>{"₹ 8 695.00"}</h3>
            <button className='bg-[#111111] -mt-4 px-5 rounded-3xl w-fit flex justify-center items-center gap-3  py-2 text-base font-medium text-white sm:text-left text-center'><TbShoppingCart /> Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductDetail
