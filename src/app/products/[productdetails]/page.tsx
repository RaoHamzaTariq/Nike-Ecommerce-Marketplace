import React from 'react';
import Image from 'next/image';
import { TbShoppingCart } from 'react-icons/tb';
import Link from 'next/link';
import { Product } from '@/data/interfaces';
import { urlFor } from '@/sanity/lib/image';

const ProductDetail = async ({ params }: { params: { productdetails: string } }) => {
  const { productdetails } = params; 

  
    const fetchData = async() =>{
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`,{
          cache:'no-cache',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ slug: productdetails })
          
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
  
    const fetchedData:Product = await fetchData()
  
  // const product = products.find((product) => product.image === productdetails);

  if (!fetchedData) {
    return <p className='flex text-xl text-[#111111] justify-center items-center w-full my-40 gap-2'>Product not found! You may have enter the wrong path. <Link href={"/"}><span className='underline font-medium'>Back to Homepage</span></Link></p>;
  }

  return (
    <div className='flex flex-col md:flex-row lg:gap-[137] md:gap-10 gap-16 justify-between xl:mx-40 lg:mx-32 md:mx-20 mx-10 lg:my-32 md:my-24 sm:my-16 my-10'>
      {/* Dynamic image rendering */}
      <Image src={
                    fetchedData.mainImage
                      ? urlFor(fetchedData.mainImage).url()
                      : "/default-image.png"
                  } alt={fetchedData.name} className='md:basis-[60%]'  width={653} height={653} />
      
      <div className='font-poppins md:basis-[40%] flex flex-col items-center md:items-start gap-7'>
        <h1 className='max-w-[367px] leading-[48px] text-4xl sm:text-5xl font-medium md:text-left text-center'>
          {fetchedData.name}
        </h1>
        <p className='text-base md:text-left text-center'>{fetchedData.shortDesc}</p>
        <h3 className='text-4xl font-medium md:text-left text-center'>{`₹ ${fetchedData.price}.00`}</h3>
        <Link href={'/cart'}><button className='bg-[#111111] -mt-4 px-5 rounded-3xl w-fit flex justify-center items-center gap-3 py-2 text-base font-medium text-white sm:text-left text-center'>
          <TbShoppingCart /> Add to Cart
        </button></Link>
      </div>
    </div>
  );
};

export default ProductDetail;
