'use client'
import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/product-card';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { BsFilter } from 'react-icons/bs';
import { Product } from '@/data/interfaces';
import Link from 'next/link';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import Pagination from 'react-paginate';


const Products =  () => {

  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
 
  const [currentPage, setCurrentPage] = useState(0);
const [productsPerPage] = useState(12); // Adjust as needed
const [totalProducts, setTotalProducts] = useState(0);
  
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
        if (!response) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setProducts(data.data)
        setTotalProducts(data.data.length);
      } catch (error) {
        console.error(error);
        return [];
      }
    };
    
    fetchData();
  },[])

  const pagesCount = Math.ceil(totalProducts / productsPerPage);
  const handlePageChange = (data: any) => {
    setCurrentPage(data.selected);
  };
  const slicedProducts = products.slice(
    currentPage * productsPerPage,
    (currentPage + 1) * productsPerPage
  );
  

  // Filter products based on selected categories
  useEffect(() => {
    if (selectedCategories.length === 0) {
      setProducts(products);
    } else {
      const filtered = products.filter((product) =>
        selectedCategories.includes(product.category)
      );
      setProducts(filtered);
    }
  }, [selectedCategories, products]);

  // Toggle category selection
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="md:pb-36 sm:pb-28 pb-20 mt-10 flex flex-col gap-3 mx-3 sm:mx-5 md:mx-7 lg:mx-10">
      <div className="flex justify-between">
        <h1 className="text-2xl font-medium">News ({products.length})</h1>
       <div className="flex gap-3 sm:gap-6 md:gap-7 items-baseline mb-5 justify-between">
  <Pagination
    pageCount={pagesCount}
    initialPage={currentPage}
    onPageChange={handlePageChange}
    containerClassName="pagination flex items-center justify-center mt-10 gap-2"
    activeClassName="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-full"
    disabledClassName="opacity-50 cursor-default"
  />
  
    <p className="text-base flex items-center gap-1">
      Filters <BsFilter />
    </p>
    <DropdownMenu>
      <DropdownMenuTrigger className="text-base flex items-center gap-1">
        Sort By <IoIosArrowDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Price</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
</div>
      </div>

      <div className="flex gap-10">
        <div className="hidden sm:!flex flex-col gap-10 max-w-[260px] w-[260px]">
          <ul className="flex flex-col gap-4 text-base font-medium">
            {[
              'Shoes',
              'Sports Bras',
              'Tops & T-Shirts',
              'Hoodies & Sweatshirts',
              'Jackets',
              'Trousers & Tights',
              'Shorts',
              'Tracksuits',
              'Jumpsuits & Rompers',
              'Skirts & Dresses',
              'Socks',
              'Accessories & Equipment',
            ].map((category) => (
              <li key={category}>
                <label className='flex gap-2'>
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => toggleCategory(category)}
                  />
                  {category}
                </label>
              </li>
            ))}
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

        <div className="flex flex-col justify-center items-center">
        {slicedProducts.length > 0 ? (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mx-5 sm:mx-0">
    {slicedProducts.map((product: Product) => (
      <Link
        key={product.slug?.current}
        href={`/products/${product.slug?.current}`}
      >
        <ProductCard
          name={product.productName}
          status={product.status}
          inventory={product.inventory}
          image={product.image}
          price={product.price}
          color={product.colors.length}
          category={product.category}
        />
      </Link>
    ))}
  </div>
) : (
  <p>Loading</p>
)}
        </div>
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
  );
};

export default Products;
