import React from 'react'
import Image from 'next/image'
import { TbShoppingCart } from 'react-icons/tb'

const ProductDetail = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between lg:mx-40 md:mx-32 sm:mx-20 mx-10 lg:my-32 md:my-24 sm:my-16 my-10'>
        <div className='max-h-[653px] '>
        <Image src={`/Images/products/nike-air-force-plt.png`} alt={"Hero Image"} width={653} height={653}/>
        </div>
        <div className='font-poppins flex flex-col gap-3'>
            <h1 className='max-w-[367px] sm:text-left text-center'>Nike Air Force 1 PLT.AF.ORM</h1>
            <p className='text-base sm:text-left text-center'>Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.</p>
            <h3 className='text-4xl font-medium sm:text-left text-center'>₹ 8 695.00</h3>
            <button className='bg-[#111111] px-5 py-2 text-base font-medium text-white sm:text-left text-center'><TbShoppingCart /> Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductDetail