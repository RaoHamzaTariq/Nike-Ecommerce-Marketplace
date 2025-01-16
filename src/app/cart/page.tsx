'use client'
import React, { useEffect } from "react";
import Image from "next/image";
import { HiOutlineTrash } from "react-icons/hi";
import { IoHeartOutline } from "react-icons/io5";
import Link from "next/link";
import { useCart } from "@/components/context/CartContext";
import { CartProducts} from "@/data/interfaces";
import { urlFor } from "@/sanity/lib/image";


const Cart = () => {
  const {cart} = useCart();
  const subTotals = cart.reduce((accumulator, item) : number => {
    return accumulator + (item.subTotal || 0);
  }, 0)
  const discountPercentage : number = 5
  console.log(cart)

  const OrderSummary = {
    subTotals: subTotals.toFixed(2),
    discount : (subTotals * (discountPercentage/100)).toFixed(2),
    deliveryFee : 3,
    grandTotal : ((subTotals - (subTotals*(discountPercentage/100))) + 3).toFixed(2)
  }
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
            {cart.length>0 ? cart.map((product:CartProducts)=>(
              <div key={product.slug} className="flex flex-col items-center sm:items-start sm:flex-row gap-6">
              <Image
                src={
                                    product.image
                                      ? urlFor(product.image).url()
                                      : "/default-image.png"
                                  } 
                alt={product.name}
                width={150}
                height={150}
                className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] mx-auto sm:mx-0"
              />
              <div className="flex flex-col sm:flex-row justify-between w-full">
                {/* Product Details */}
                <div className="text-[#757575] text-sm space-y-2 text-center sm:text-left">
                  <p className="text-[#111111] font-medium">
                    {product.name}
                  </p>
                  <p>{product.category}</p>
                  {/* <p>Ashen Slate/Cobalt Bliss</p> */}
                  <div className="flex gap-4 justify-center sm:justify-start text-sm">
                    {/* <p>Size L</p> */}
                    <p>{product.quantity}</p>
                  </div>
                  <div className="flex gap-4 justify-center sm:justify-start text-xl text-black">
                    <IoHeartOutline />
                    <HiOutlineTrash />
                  </div>
                </div>
                {/* Product Price */}
                <p className="text-sm text-[#111111] font-medium mt-4 sm:mt-0 sm:text-right text-center">
                  MRP: ₹ {product.price}
                </p>
              </div>
            </div>
            )):<p>First Choose product for order</p>}
          </div>
        </div>

        {/* Right Section: Order Summary */}
        <div className="w-full lg:w-1/3 p-6">
          <h1 className="text-[#111111] text-lg font-medium mb-6 text-center sm:text-left">
            Order Summary
          </h1>
          <div className="space-y-4 text-center sm:text-left">
            <div className="flex justify-between text-sm">
              <p>Subtotal</p>
              <p>₹ {OrderSummary.subTotals}</p>
            </div>
            <div className="flex justify-between text-sm">
              <p>Delivery/Shipping</p>
              <p>₹ {OrderSummary.deliveryFee}</p>
            </div>
            <div className="flex justify-between text-sm font-medium">
              <p>Total</p>
              <p>₹ {OrderSummary.grandTotal}</p>
            </div>
          </div>
         <Link href={"/checkout"}><button className="py-[10px] w-full mt-8 bg-[#111111] rounded-[30px] text-center text-white">Member Checkout</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
