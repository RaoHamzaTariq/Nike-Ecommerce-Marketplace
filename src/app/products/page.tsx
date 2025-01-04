import React from 'react'
import ProductCard from '../components/product-card'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { BsFilter } from 'react-icons/bs'
// import { Product,  } from '@/data/data'
import { Product } from '@/data/interfaces'
import Link from 'next/link'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'


const Products = async () => {

  const fetchData = async() =>{
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`,{
        cache:'no-cache'
      })
      if(!response){
        throw new Error('Failed to fetch data')
      }
      const data = await response.json()
      return data.data
    } catch (error) {
      console.error(error)
      return []
    }
   
  }

  const fetchedData:Product[] = await fetchData()


  return (
    <div className='md:pb-36 sm:pb-28 pb-20  mt-10 flex flex-col gap-3 mx-3 sm:mx-5 md:mx-7 lg:mx-10'>
        <div className='flex justify-between '>
            <h1 className='text-2xl font-medium'>News (500)</h1>
            <div className='flex gap-3 '>
                <p className='text-base flex items-center gap-1'>Filters <BsFilter />
                </p>
                {/* <p className='text-base flex items-center gap-1'></p> */}
                <DropdownMenu>
  <DropdownMenuTrigger className='text-base flex items-center gap-1'>Sort By <IoIosArrowDown /></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem >Price</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

            </div>
        </div>
        
    <div className='flex gap-10 '>
        <div className='hidden sm:!flex flex-col gap-10 max-w-[260px] w-[260px]'>
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
        <div className="flex items-center text-base gap-2 ">
        <input type="checkbox" />
        <p>
          Men
        </p>
      </div>
      <div className="flex items-center text-base gap-2 ">
        <input type="checkbox" />
        <p>
          Women
        </p>
      </div>
      <div className="flex items-center text-base gap-2 ">
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
        <div className="flex items-center text-base gap-2 ">
        <input type="checkbox" />
        <p>
          Boys
        </p>
      </div>
      <div className="flex items-center text-base gap-2 ">
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
        <div className="flex items-center text-base gap-2 ">
        <input type="checkbox" />
        <p>
          {"Under ₹ 2 500.00"}
        </p>
      </div>
      <div className="flex items-center text-base gap-2 ">
        <input type="checkbox" />
        <p>
          {"₹ 2 501.00 - ₹ 7 500.00"}
        </p>
      </div>
        </div>
    </div>
</div>
           
        </div>
        <div className='flex flex-col justify-center items-center'>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mx-5 sm:mx-0'>
      {fetchedData.length>0 ? fetchedData.map((product:Product)=>(
        <Link key={product.slug?.current} href={`/products/${product.slug?.current}`}><ProductCard name={product.name} tag={product.status} image={product.mainImage} price={product.price} color={product.colors} category={product.category}/></Link>
      )):(
        <p>Products not found</p>
      )}
        
    </div>

    <div className='flex flex-col gap-4 mt-32'>
      <h3 className='text-[19px] font-medium'>Related Categories</h3>
      <ul className='flex flex-wrap gap-2  text-xs mx-5 sm:mx-0'>
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