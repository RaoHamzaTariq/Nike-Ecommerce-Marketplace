'use client'
import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/product-card';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { BsFilter } from 'react-icons/bs';
import { Product } from '@/data/interfaces';
import Link from 'next/link';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import Pagination from 'react-paginate';
import Loading from '@/components/ui/loading';


const Products =  ({ searchParams }: { searchParams: Record<string, string> }) => {
  const [allProducts, setAllProducts] = useState<Product[]>([]); // Store all products
  const [products, setProducts] = useState<Product[]>([]); // Store filtered products
  const [categories, setCategories] = useState<string[]>([]); // Store categories
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<[number, number] | null>(null);
  const search = new URLSearchParams(searchParams).get("filter");
  
  useEffect(()=>{
    console.log(search)
  },[search]) 

  const [loading,setLoading] = useState(true)

  const [currentPage, setCurrentPage] = useState(0);
  const [productsPerPage] = useState(12);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
        const categoryResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products?query=category`);

        if (!response.ok || !categoryResponse.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const categoryData = await categoryResponse.json();
        setLoading(false)
        setAllProducts(data.data); // Store all products
        setProducts(data.data); // Initialize filtered products
        setCategories(Array.from(new Set(categoryData.data)));   // Ensure unique categories
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();


    
  }, []);



  const pagesCount = Math.ceil(products.length / productsPerPage);
  const handlePageChange = (data: { selected: React.SetStateAction<number> }) => {
    setCurrentPage(data.selected);
  };

  const slicedProducts = products.slice(
    currentPage * productsPerPage,
    (currentPage + 1) * productsPerPage
  );

  useEffect(() => {
    let filteredProducts = allProducts;
  
    // Apply gender filter from URL search params
    if (search === "women") {
      filteredProducts = filteredProducts.filter((product) => product.category.includes("Women"));
    } else if (search === "men") {
      filteredProducts = filteredProducts.filter((product) => product.category.includes("Men"));
    } else if(search === "trending"){
      filteredProducts = filteredProducts.filter((product) => product.status.includes("Trending"));
    }
  
    // Filter by category
    if (selectedCategories.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }
  
    // Filter by gender (from UI selections)
    if (selectedGenders.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedGenders.includes(product.category.slice(0, 5)) 
      );
    }
  
    // Filter by price range
    if (selectedPriceRange) {
      const [minPrice, maxPrice] = selectedPriceRange;
      filteredProducts = filteredProducts.filter((product) => {
        const productPrice = typeof product.price === 'string' ? parseFloat(product.price) : product.price;
        return productPrice >= minPrice && productPrice <= maxPrice;
      });
    }
  
    setProducts(filteredProducts);
    setCurrentPage(0); // Reset pagination
  }, [selectedCategories, selectedGenders, search, selectedPriceRange, allProducts]);
  


  // Toggle category selection
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category) // Remove category
        : [...prev, category] // Add category
    );
  };

  const toggleGender = (gender: string) => {
    setSelectedGenders((prev) =>
      prev.includes(gender)
        ? prev.filter((gen) => gen !== gender) // Remove gender
        : [...prev, gender] // Add gender
    );
  };

  const handlePriceRangeSelection = (range: [number, number]) => {
    setSelectedPriceRange(range);
  };


  if(loading){
    return <Loading type='product-listing'/>
  }

  return (
    <div className="md:pb-36 sm:pb-28 pb-20 mt-10 flex flex-col gap-3 mx-3 sm:mx-5 md:mx-7 lg:mx-10">
      <div className="flex justify-between">
        <h1 className="text-2xl font-medium">News ({products.length})</h1>
       <div className="flex gap-3 sm:gap-6 md:gap-7 items-baseline mb-5 justify-between">
  
  
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
          {categories.length > 0 ? (
              categories.map((category) => (
                <li key={category}>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                    />
                    {category}
                  </label>
                </li>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </ul>
          <div className='flex flex-col gap-9'>
    <div className=' flex flex-col gap-3 w-full'>
        <h4 className='text-base font-medium flex justify-between items-center w-full'>Gender  <IoIosArrowUp /></h4>
        <div className='flex flex-col gap-1'>
       {["Men's", 'Women'].map((gender) => (
              <label key={gender} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedGenders.includes(gender)}
                  onChange={() => toggleGender(gender)}
                />
                {gender}
              </label>
            ))}
        </div>
    </div>
    {/* Price Filter */}
    <div className="flex flex-col gap-4 mt-8">
            <h3 className="text-lg font-medium">Shop by Price</h3>
            {[
              [0, 2500],
              [2501, 7500],
              [7501, 15000],
              [15001, Infinity]
            ].map(([min, max], index) => (
              <label key={index} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="priceRange"
                  onChange={() => handlePriceRangeSelection([min, max])}
                />
                {max === Infinity ? `Above PKR${min}` : `PKR ${min} - PKR ${max}`}
              </label>
            ))}
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
          _id={product._id}
        />
      </Link>
    ))}
  </div>
) : (
  <p className=' flex text-red-700 text-xl'>No Product Found</p>
)}
        
      </div>
      </div>
        <Pagination
    pageCount={pagesCount}
    initialPage={currentPage}
    onPageChange={handlePageChange}
    containerClassName="pagination flex items-center justify-center mt-10 gap-2"
    activeClassName="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-full"
    disabledClassName="opacity-50 cursor-default"
  />
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
