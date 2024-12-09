import React from 'react';
import Image from 'next/image';
import { TbShoppingCart } from 'react-icons/tb';
import { products } from '@/data/data';
import Link from 'next/link';

const ProductDetail = ({ params }: { params: { productdetails: string } }) => {
  const { productdetails } = params; 

  const product = products.find((product) => product.image === productdetails);

  if (!product) {
    return <p className='flex text-xl text-[#111111] justify-center items-center w-full my-40 gap-2'>Product not found! You may have enter the wrong path. <Link href={"/"}><span className='underline font-medium'>Back to Homepage</span></Link></p>;
  }

  return (
    <div className='flex flex-col md:flex-row lg:gap-[137] md:gap-10 gap-16 justify-between xl:mx-40 lg:mx-32 md:mx-20 mx-10 lg:my-32 md:my-24 sm:my-16 my-10'>
      {/* Dynamic image rendering */}
      <Image src={`/Images/products/${product.image}.png`} alt={product.name}  width={700} height={700} />
      
      <div className='font-poppins flex flex-col items-center md:items-start gap-7'>
        <h1 className='max-w-[367px] leading-[48px] text-4xl sm:text-5xl font-medium md:text-left text-center'>
          {product.name}
        </h1>
        <p className='text-base md:text-left text-center'>{`Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.`}</p>
        <h3 className='text-4xl font-medium md:text-left text-center'>{product.price}</h3>
        <Link href={'/cart'}><button className='bg-[#111111] -mt-4 px-5 rounded-3xl w-fit flex justify-center items-center gap-3 py-2 text-base font-medium text-white sm:text-left text-center'>
          <TbShoppingCart /> Add to Cart
        </button></Link>
      </div>
    </div>
  );
};

export default ProductDetail;
