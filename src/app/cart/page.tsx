"use client";
import React from "react";
import Image from "next/image";
import { HiOutlineTrash } from "react-icons/hi";
import { IoHeartOutline } from "react-icons/io5";
import Link from "next/link";
import { useCart } from "@/components/context/CartContext";
import { urlFor } from "@/sanity/lib/image";
import { FaShoppingCart, FaTag, FaTruck } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa6";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const subTotals = cart.reduce((accumulator, item): number => {
    return accumulator + (item.subTotal || 0);
  }, 0);
  const discountPercentage: number = 5;

  const OrderSummary = {
    subTotals: subTotals.toFixed(2),
    discount: (subTotals * (discountPercentage / 100)).toFixed(2),
    deliveryFee: subTotals > 14000 ? 0 : 5,
    grandTotal: (
      subTotals -
      subTotals * (discountPercentage / 100) +
      3
    ).toFixed(2),
  };
  return (
    <div className="flex flex-col justify-center items-center  w-full text-[#111111] font-inter px-4 sm:px-6 lg:px-8 py-6">
      <div className="max-w-[1100px] flex flex-col lg:flex-row gap-8 w-full">
        {/* Left Section: Bag */}
        <div className="w-full lg:w-2/3">
          {/* Delivery Info */}
          <div className="h-[63px] flex flex-col items-center sm:items-start gap-1 bg-[#f5f5f5] p-4 rounded-md">
            <h4 className="text-sm font-medium text-center sm:text-left">
              Free Delivery
            </h4>
            <p className="text-xs text-center sm:text-left">
              {"Applies to orders of ₹ 14 000.00 or more."}{" "}
              <span className="underline font-medium">View details</span>
            </p>
          </div>

          {/* Bag Heading */}
          <h3 className="font-medium text-xl mt-5 text-center sm:text-left">
            Bag
          </h3>

          {/* Product List */}
          <div className="space-y-6 mt-5">
      {cart.length > 0 ? (
        cart.map((product) => (
          <div key={product.slug} className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group">
            {/* Product Image Container */}
            <div className="relative group">
              <Image
                src={product.image ? urlFor(product.image).url() : "/default-image.png"}
                alt={product.productName}
                width={150}
                height={150}
                className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] mx-auto sm:mx-0 rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Hover Badge */}
              <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                In Cart
              </div>
            </div>

            {/* Product Details */}
            <div className="flex flex-col sm:flex-row justify-between w-full">
              <div className="text-[#757575] text-sm space-y-2 text-center sm:text-left">
                <h3 className="text-[#111111] font-medium text-lg">
                  {product.productName}
                </h3>
                
                <p className="text-gray-500">{product.category}</p>
                
                {/* Quantity Badge */}
                <div className="flex gap-4 justify-center sm:justify-start items-center">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-700">
                    Qty: {product.quantity}
                  </span>
                </div>

                {/* Action Icons */}
                <div className="flex gap-4 justify-center sm:justify-start text-xl text-black mt-3">
                  {/* Wishlist Button */}
                  <button 
                    aria-label="Add to Wishlist"
                    className="hover:text-red-500 transition-colors group"
                  >
                    <IoHeartOutline className="group-hover:scale-110 transition-transform" />
                  </button>
                  
                  {/* Remove Button */}
                  <button 
                    onClick={() => removeFromCart(product.slug)}
                    aria-label="Remove from Cart"
                    className="hover:text-red-500 transition-colors group"
                  >
                    <HiOutlineTrash className="group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Price Section */}
              <div className="flex flex-col items-center sm:items-end mt-4 sm:mt-0">
                <p className="text-sm text-[#111111] font-semibold">
                  MRP: PKR {product.price}
                </p>
                
                <p className="text-xs text-green-600 mt-1">
                  Free Shipping
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center h-64 bg-gray-50 rounded-xl text-center">
          <FaShoppingCart className="text-6xl text-gray-400 mb-4" />
          
          <p className="text-lg font-medium text-gray-600">
            Your cart is empty
          </p>
          
          <p className="text-sm text-gray-500 mt-2">
            Explore our products and add items to cart
          </p>
        </div>
      )}
    </div>
        </div>

        {/* Right Section: Order Summary */}
        <div className="w-full lg:w-1/3 bg-white shadow-2xl rounded-2xl p-8 border border-gray-100 transform transition-all duration-300 hover:scale-[1.02]">
          {/* Header */}
          <div className="flex items-center justify-center mb-6 space-x-3">
            <FaShoppingCart className="text-black text-2xl" />
            <h1 className="text-[#111111] text-2xl font-bold">Order Summary</h1>
          </div>

          {/* Order Details */}
          <div className="space-y-4">
            {/* Subtotal */}
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 group">
              <div className="flex items-center space-x-3">
                <FaCalculator className="text-gray-600 group-hover:text-black transition-colors" />
                <p className="text-sm text-gray-700 group-hover:text-black transition-colors">
                  Subtotal
                </p>
              </div>
              <p className="font-semibold group-hover:text-blue-600 transition-colors">
                ₹ {OrderSummary.subTotals}
              </p>
            </div>

            {/* Delivery */}
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 group">
              <div className="flex items-center space-x-3">
                <FaTruck className="text-gray-600 group-hover:text-black transition-colors" />
                <p className="text-sm text-gray-700 group-hover:text-black transition-colors">
                  Delivery/Shipping
                </p>
              </div>
              <p className="font-semibold group-hover:text-blue-600 transition-colors">
                ₹ {OrderSummary.deliveryFee}
              </p>
            </div>

            {/* Discount */}
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 group">
              <div className="flex items-center space-x-3">
                <FaTag className="text-gray-600 group-hover:text-black transition-colors" />
                <p className="text-sm text-gray-700 group-hover:text-black transition-colors">
                  Discount
                </p>
              </div>
              <p className="font-semibold text-green-600 group-hover:text-green-700 transition-colors">
                -₹ {OrderSummary.discount}
              </p>
            </div>

            {/* Total */}
            <div className="flex justify-between items-center p-4 bg-gray-100 rounded-xl border border-gray-200 hover:bg-gray-200 transition-colors duration-200">
              <p className="text-lg font-bold text-gray-800 hover:text-black transition-colors">
                Total
              </p>
              <p className="text-xl font-extrabold text-black hover:text-blue-700 transition-colors">
                ₹ {OrderSummary.grandTotal}
              </p>
            </div>
          </div>

          {/* Checkout Button */}
          <Link href="/checkout">
            <button
              className="
            w-full mt-8 py-4 
            bg-black text-white 
            rounded-full 
            flex items-center justify-center 
            space-x-3 
            transition-all duration-300 
            hover:bg-gray-800 
            hover:shadow-lg 
            active:scale-95
          "
            >
              <FaShoppingCart />
              <span>Member Checkout</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
