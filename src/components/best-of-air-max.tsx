'use client';
import React, { useRef, useState, useEffect } from 'react';
import { Product } from '@/data/interfaces';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

const BestOfAirMax = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isMouseDown = useRef<boolean>(false);
  const startX = useRef<number>(0);
  const scrollLeftOffset = useRef<number>(0);

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

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -getScrollValue(), behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: getScrollValue(), behavior: 'smooth' });
    }
  };

  // Handle mouse down event to start dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    isMouseDown.current = true;
    startX.current = e.pageX - carouselRef.current!.offsetLeft;
    scrollLeftOffset.current = carouselRef.current!.scrollLeft;
  };

  // Handle mouse move event to drag
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown.current) return;
    const x = e.pageX - carouselRef.current!.offsetLeft;
    const scroll = scrollLeftOffset.current - (x - startX.current);
    carouselRef.current!.scrollLeft = scroll;
  };

  // Handle mouse up event to stop dragging
  const handleMouseUp = () => {
    isMouseDown.current = false;
  };

  // Handle mouse leave event to stop dragging when mouse leaves the carousel area
  const handleMouseLeave = () => {
    isMouseDown.current = false;
  };

  return (
    <section className="md:pb-36 sm:pb-28 pb-20 mx-3 sm:mx-5 md:mx-7 lg:mx-10 flex flex-col gap-3">
      <div className="py-1 flex justify-between gap-1 text-[#111111]">
        <p className="text-2xl font-medium">Best of Air Max</p>
        <div className="flex items-center gap-3">
          <p className="text-base font-medium">Shop</p>
          <div className="flex gap-2">
            <button onClick={scrollLeft} className="bg-[#e5e5e5] px-4 py-2 rounded-full">
              <IoIosArrowBack />
            </button>
            <button onClick={scrollRight} className="bg-[#e5e5e5] px-4 py-2 rounded-full">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
      <div
        ref={carouselRef}
        className="flex overflow-x-scroll space-x-4 scrollbar-hide px-4"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {loading ? (
          <p>Loading products...</p>
        ) : products.length > 0 ? (
          products.map((product: Product) => (
            <div
              key={product.id}
              className="flex flex-col gap-5 min-w-[280px] max-w-[320px] sm:min-w-[350px] sm:max-w-[400px] md:min-w-[400px] md:max-w-[450px] lg:min-w-[450px] lg:max-w-[500px]"

            >
              <div>
                <Image
                  src={product.mainImage ? urlFor(product.mainImage).url() : '/default-image.png'}
                  alt={`${product.name} Image`}
                  width={442}
                  height={442}
                />
              </div>
              <div className="flex justify-between">
                <div className="text-base">
                  <h3 className="font-medium">{product.name}</h3>
                  <h4 className="max-w-[220px]">{product.category}</h4>
                </div>
                <p className="font-medium">₹{product.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Products not found</p>
        )}
      </div>
    </section>
  );
};

export default BestOfAirMax;
