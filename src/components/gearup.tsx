'use client';
import React, { useRef, useState, useEffect } from 'react';
import { Product } from '@/data/interfaces';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';

const GearUp = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Refs for each carousel
  const carouselRef1 = useRef<HTMLDivElement>(null);
  const carouselRef2 = useRef<HTMLDivElement>(null);

  const getScrollValue = () => {
    if (typeof window !== 'undefined') {
      const screenWidth = window.innerWidth;
      // Adjust scroll value based on screen size
      if (screenWidth >= 1024) {
        return 900; // For larger screens, scroll by 3 products (300px each)
      } else if (screenWidth >= 640) {
        return 600; // For medium screens, scroll by 2 products
      } else {
        return 300; // For small screens, scroll by 1 product
      }
    }
    return 300; // Default value if window is undefined (for SSR)
  };

  // Fetch data inside useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/products`,
          { cache: 'no-cache' }
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setProducts(data.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only on mount

  const scrollLeft1 = () => {
    if (carouselRef1.current) {
      carouselRef1.current.scrollBy({ left: -getScrollValue(), behavior: 'smooth' });
    }
  };

  const scrollRight1 = () => {
    if (carouselRef1.current) {
      carouselRef1.current.scrollBy({ left: getScrollValue(), behavior: 'smooth' });
    }
  };

  const scrollLeft2 = () => {
    if (carouselRef2.current) {
      carouselRef2.current.scrollBy({ left: -getScrollValue(), behavior: 'smooth' });
    }
  };

  const scrollRight2 = () => {
    if (carouselRef2.current) {
      carouselRef2.current.scrollBy({ left: getScrollValue(), behavior: 'smooth' });
    }
  };

  return (
    <section className="md:pb-36 sm:pb-28 pb-20 mx-3 sm:mx-5 md:mx-7 lg:mx-10 flex flex-col gap-3">
                <p className="text-2xl font-medium">Gear Up</p>
    <div className='flex flex-col sm:flex-row justify-center items-center gap-3'>
      {/* Carousel 1 */}
      <div className="w-full lg:w-1/2">
      <div className="py-1 flex  gap-1 text-[#111111]">

        <div className="flex items-center w-full justify-end gap-3">
          <p className="text-base font-medium">{"Men's"}</p>
          <div className="flex gap-2">
            <button onClick={scrollLeft1} className="bg-[#e5e5e5] px-4 py-2 rounded-full">
              <IoIosArrowBack />
            </button>
            <button onClick={scrollRight1} className="bg-[#e5e5e5] px-4 py-2 rounded-full">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
      <div ref={carouselRef1} className="flex overflow-x-scroll space-x-4 scrollbar-hide px-4">
        {loading ? (
          <p>Loading products...</p>
        ) : products.length > 0 ? (
          products.map((product: Product) => (
            <Link href={`/products/${product.slug.current}`} key={product.id}><div  className="flex flex-col gap-5 min-w-[300px] sm:min-w-[250px] md:min-w-[300px]">
              <div>
                <Image
                  src={product.image ? urlFor(product.image).url() : '/default-image.png'}
                  alt={`${product.productName} Image`}
                  width={442}
                  height={442}
                />
              </div>
              <div className="flex justify-between">
                <div className="text-base">
                  <h3 className="font-medium">{product.productName}</h3>
                  <h4 className="max-w-[220px]">{product.category}</h4>
                </div>
                <p className="font-medium">₹{product.price}</p>
              </div>
            </div></Link>
          ))
        ) : (
          <p>Products not found</p>
        )}
      </div>
      </div>

      {/* Carousel 2 */}
      <div className="w-full lg:w-1/2">
      <div className="py-1 flex  gap-1 text-[#111111]">
        <div className="flex w-full items-center gap-3 justify-end">
          <p className="text-base font-medium">{"Women's"}</p>
          <div className="flex gap-2">
            <button onClick={scrollLeft2} className="bg-[#e5e5e5] px-4 py-2 rounded-full">
              <IoIosArrowBack />
            </button>
            <button onClick={scrollRight2} className="bg-[#e5e5e5] px-4 py-2 rounded-full">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
      <div ref={carouselRef2} className="flex overflow-x-scroll space-x-4 scrollbar-hide px-4">
        {loading ? (
          <p>Loading products...</p>
        ) : products.length > 0 ? (
          products.map((product: Product) => (
            <Link href={`/products/${product.slug.current}`} key={product.id} ><div  className="flex flex-col gap-5 min-w-[300px] sm:min-w-[250px] md:min-w-[300px]">
              <div>
                <Image
                  src={product.image ? urlFor(product.image).url() : '/default-image.png'}
                  alt={`${product.productName} Image`}
                  width={442}
                  height={442}
                />
              </div>
              <div className="flex justify-between">
                <div className="text-base">
                  <h3 className="font-medium">{product.productName}</h3>
                  <h4 className="max-w-[220px]">{product.category}</h4>
                </div>
                <p className="font-medium">₹{product.price}</p>
              </div>
            </div></Link>
          ))
        ) : (
          <p>Products not found</p>
        )}
      </div>
      </div>
      </div>
    </section>
  );
};

export default GearUp;



