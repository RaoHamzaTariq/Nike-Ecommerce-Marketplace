import React from 'react'
import ProductCard from '../components/product-card'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
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
        <div className='hidden sm:!flex flex-col gap-10 '>
            <ul className='flex flex-col gap-4 text-base font-medium'>
           
    <li>Shoes</li>
    <li>Sports Bras</li>
    <li>Tops & T-Shirts</li>
    <li>Hoodies & Sweatshirts</li>
    <li>Jackets</li>
    <li>Trousers & Tights</li>
    <li>Shorts</li>
    <li>Tracksuits</li>
    <li>Jumpsuits & Rompers</li>
    <li>Skirts & Dresses</li>
    <li>Socks</li>
    <li>Accessories & Equipment</li>
</ul>
<div className='flex flex-col gap-9'>
    <div className=' flex flex-col gap-3 w-full'>
        <h4 className='text-base font-medium flex justify-between items-center w-full'>Gender  <IoIosArrowUp /></h4>
        <div className='flex flex-col gap-1'>
        <div className="flex items-start text-base gap-2 ">
        <input type="checkbox" />
        <p>
          Men
        </p>
      </div>
      <div className="flex items-start text-base gap-2 ">
        <input type="checkbox" />
        <p>
          Women
        </p>
      </div>
      <div className="flex items-start text-base gap-2 ">
        <input type="checkbox" />
        <p>
          Unisex
        </p>
      </div>
        </div>
    </div>
    <div className=' flex flex-col gap-3 w-full'>
        <h4 className='text-base font-medium flex justify-between items-center w-full'>Kids<IoIosArrowUp /></h4>
        <div className='flex flex-col gap-1'>
        <div className="flex items-start text-base gap-2 ">
        <input type="checkbox" />
        <p>
          Boys
        </p>
      </div>
      <div className="flex items-start text-base gap-2 ">
        <input type="checkbox" />
        <p>
          Girls
        </p>
      </div>
        </div>
    </div>
    <div className=' flex flex-col gap-3 w-full'>
        <h4 className='text-base font-medium flex justify-between items-center w-full'>Shop By Price  <IoIosArrowUp /></h4>
        <div className='flex flex-col gap-1'>
        <div className="flex items-start text-base gap-2 ">
        <input type="checkbox" />
        <p>
          {"Under ₹ 2 500.00"}
        </p>
      </div>
      <div className="flex items-start text-base gap-2 ">
        <input type="checkbox" />
        <p>
          {"₹ 2 501.00 - ₹ 7 500.00"}
        </p>
      </div>
        </div>
    </div>
</div>
           
        </div>
        <div>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mx-5 sm:mx-0'>
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

    <div className='flex flex-col gap-4 mt-16'>
      <h3 className='text-[19px] font-medium'>Related Categories</h3>
      <ul className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-8 justify-center mx-5 sm:mx-0'>
    <li className='related-catgories'>Best Selling Products</li>
    <li className='related-catgories'>Best Shoes</li>
    <li className='related-catgories'>New Basketball Shoes</li>
    <li className='related-catgories'>New Football Shoes</li>
    <li className='related-catgories'>{"New Men's Shoes"}</li>
    <li className='related-catgories'>New Running Shoes</li>
    <li className='related-catgories'>{"Best Men's Shoes"}</li>
    <li className='related-catgories'>New Jordan Shoes</li>
    <li className='related-catgories'>{"Best Women's Shoes"}</li>
    <li className='related-catgories'>Best Training & Gym</li>
</ul>
    </div>
    
    </div>
    </div>
    </div>
  )
}

export default Products