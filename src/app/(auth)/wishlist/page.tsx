"use client";

import { Wishlist, WishlistProduct } from "@/data/interfaces";
import { urlFor } from "@/sanity/lib/image";
import { useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  FaHeart, 
  FaShoppingCart, 
  FaTrash  
} from 'react-icons/fa';
import Loading from "@/components/ui/loading";




export default function WishlistPage() {
  const { user } = useUser(); // Correct use of `useUser`
  const [products, setProducts] = useState<WishlistProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        setLoading(true);
        setError(null);

        // Ensure user is logged in
        if (!user || !user.emailAddresses[0]?.emailAddress) {
          throw new Error("User not logged in or email not available");
        }

        // Fetch the user's wishlist data
        const userResponse = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/register?email=${user.emailAddresses[0].emailAddress}`,
          { cache: "no-cache" }
        );
        
        if (!userResponse.ok) throw new Error("Failed to fetch user data");

        const userData = await userResponse.json();
        const wishlist : Wishlist[]  = userData?.data?.wishList || [];
        
        if (wishlist.length === 0) {
          setProducts([]);
          return;
        }
        // Fetch product data for wishlist
        const wishlistIds = wishlist.map((item: Wishlist) => item.productId);
  
        const productResponse = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/products?query=wishlist`,
          {
            cache: "no-cache",
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ wishlistIds }),
          }
        );

        
        if (!productResponse.ok) throw new Error("Failed to fetch product data");

        const productData = await productResponse.json();
        setProducts(productData.products);
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false);
      }
    };

    if (user) fetchWishlist(); // Fetch wishlist only when user is available
  }, [user]); // Dependency on `user`

  // Render individual product card
  const renderProduct = (product: WishlistProduct) => (
    <div 
    key={product._id} 
    className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
  >
    {/* Wishlist Badge */}
    <div className="absolute top-4 right-4 z-10">
      <FaHeart 
        className="text-red-500 text-2xl cursor-pointer hover:scale-110 transition-transform"
      />
    </div>

    {/* Product Image */}
    <div className="relative w-full h-64 overflow-hidden">
      <Image
        src={product.imageUrl ? urlFor(product.imageUrl).url() : "/default-image.png"}
        alt={product.productName}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-300"
      />
    </div>

    {/* Product Details */}
    <div className="p-5 bg-white">
      <h2 className="text-xl font-bold text-gray-800 mb-2">
        {product.productName}
      </h2>
      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold text-gray-900">
          PKR {product.price}.00
        </span>
        <div className="flex space-x-2">
          <button 
            className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-colors"
            aria-label="Add to Cart"
          >
            <FaShoppingCart />
          </button>
          <button 
            className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
            aria-label="Remove from Wishlist"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  </div>
  );

  // Loading state
  if (loading) {
    return (
      <Loading type="wishlist"/>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-red-500 mb-4">
            Oops! Something went wrong
          </h1>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  // Empty wishlist state
  if (products.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-white">
        <FaHeart className="text-8xl text-gray-300 mb-6" />
        <h1 className="text-3xl font-bold text-gray-700 mb-4">
          Your Wishlist is Empty
        </h1>
        <p className="text-gray-500 mb-6">
          Explore our products and add some items to your wishlist!
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
          Start Shopping
        </button>
      </div>
    );
  }

  // Render wishlist
  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          My Wishlist
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map(renderProduct)}
        </div>
      </div>
    </div>
  );
}
