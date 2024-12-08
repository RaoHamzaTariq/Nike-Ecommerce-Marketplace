import React from 'react'
import ProductCard from '../components/product-card'
import { IoIosArrowDown } from 'react-icons/io'
import { BsFilter } from 'react-icons/bs'

const Products = () => {
  return (
    <div className='md:pb-36 sm:pb-28 pb-20  mt-10 flex flex-col gap-3 mx-3 sm:mx-5 md:mx-7 lg:mx-10'>
        <div className='flex justify-between '>
            <h1 className='text-2xl font-medium'>News (500)</h1>
            <div className='flex gap-3 '>
                <p className='text-base flex items-center gap-1'>Filters <BsFilter />
                </p>
                <p className='text-base flex items-center gap-1'>Sort By <IoIosArrowDown /></p>
            </div>
        </div>
        
    <div className='flex gap-10 '>
        <div className='hidden sm:!block'>

        </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        <ProductCard name={"Nike Air Force 1 Mid '07"} tag={"Just In"} image='nike-air-force-react' price={10795.00} color={1} category={"Men's Shoes"}/>
        <ProductCard name={"Nike Air Force 1 Mid '07"} tag={"Just In"} image='nike-air-force-react' price={10795.00} color={1} category={"Men's Shoes"}/>
        <ProductCard name={"Nike Air Force 1 Mid '07"} tag={"Just In"} image='nike-air-force-react' price={10795.00} color={1} category={"Men's Shoes"}/>
        <ProductCard name={"Nike Air Force 1 Mid '07"} tag={"Just In"} image='nike-air-force-react' price={10795.00} color={1} category={"Men's Shoes"}/>
        <ProductCard name={"Nike Air Force 1 Mid '07"} tag={"Just In"} image='nike-air-force-react' price={10795.00} color={1} category={"Men's Shoes"}/>
        <ProductCard name={"Nike Air Force 1 Mid '07"} tag={"Just In"} image='nike-air-force-react' price={10795.00} color={1} category={"Men's Shoes"}/>
        <ProductCard name={"Nike Air Force 1 Mid '07"} tag={"Just In"} image='nike-air-force-react' price={10795.00} color={1} category={"Men's Shoes"}/>
        <ProductCard name={"Nike Air Force 1 Mid '07"} tag={"Just In"} image='nike-air-force-react' price={10795.00} color={1} category={"Men's Shoes"}/>
        <ProductCard name={"Nike Air Force 1 Mid '07"} tag={"Just In"} image='nike-air-force-react' price={10795.00} color={1} category={"Men's Shoes"}/>
        <ProductCard name={"Nike Air Force 1 Mid '07"} tag={"Just In"} image='nike-air-force-react' price={10795.00} color={1} category={"Men's Shoes"}/>
        <ProductCard name={"Nike Air Force 1 Mid '07"} tag={"Just In"} image='nike-air-force-react' price={10795.00} color={1} category={"Men's Shoes"}/>
        <ProductCard name={"Nike Air Force 1 Mid '07"} tag={"Just In"} image='nike-air-force-react' price={10795.00} color={1} category={"Men's Shoes"}/>
        <ProductCard name={"Nike Air Force 1 Mid '07"} tag={"Just In"} image='nike-air-force-react' price={10795.00} color={1} category={"Men's Shoes"}/>
        <ProductCard name={"Nike Air Force 1 Mid '07"} tag={"Just In"} image='nike-air-force-react' price={10795.00} color={1} category={"Men's Shoes"}/>
        <ProductCard name={"Nike Air Force 1 Mid '07"} tag={"Just In"} image='nike-air-force-react' price={10795.00} color={1} category={"Men's Shoes"}/>
        <ProductCard name={"Nike Air Force 1 Mid '07"} tag={"Just In"} image='nike-air-force-react' price={10795.00} color={1} category={"Men's Shoes"}/>
        <ProductCard name={"Nike Air Force 1 Mid '07"} tag={"Just In"} image='nike-air-force-react' price={10795.00} color={1} category={"Men's Shoes"}/>
        <ProductCard name={"Nike Air Force 1 Mid '07"} tag={"Just In"} image='nike-air-force-react' price={10795.00} color={1} category={"Men's Shoes"}/>
    </div>
    
    </div>
    </div>
  )
}

export default Products