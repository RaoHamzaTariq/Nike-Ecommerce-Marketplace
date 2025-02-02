"use client";

import React, { useEffect, useState } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import Image from "next/image";
import { useCart } from "@/components/context/CartContext";
import { CartProducts, User } from "@/data/interfaces";
import { urlFor } from "@/sanity/lib/image";
import { toast } from "sonner";
import { useRouter } from 'next/navigation';
import { fetchUserData } from "@/components/Functions/wishlist";

const CheckOut = () => {
  const { cart, clearCart } = useCart();
  const router = useRouter();

  // Calculate cart totals
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = 0; // Free shipping
  const total = subtotal + shippingCost;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fullAddress: "",
    postalCode: "",
    state: "Sindh",
    city: "",
    country: "Pakistan",
    email: "",
    phoneNumber: "",
  });

  const [loading, setLoading] = useState(false);

  // Redirect if cart is empty
  useEffect(() => {
    if (cart.length === 0) {
      router.push('/cart');
      toast.error("Your cart is empty!");
    }
  }, [cart, router]);

  // Form validation
  const validateForm = () => {
    if (!formData.firstName.trim()) return "First name is required";
    if (!formData.lastName.trim()) return "Last name is required";
    if (!formData.fullAddress.trim()) return "Address is required";
    if (!formData.postalCode.trim()) return "Postal code is required";
    if (!formData.city.trim()) return "City is required";
    if (!formData.email.trim()) return "Email is required";
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) return "Invalid email format";
    if (!formData.phoneNumber.trim()) return "Phone number is required";
    if (!/^\d{11}$/.test(formData.phoneNumber.replace(/[- ]/g, ''))) 
      return "Please enter a valid 11-digit phone number";
    return null;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      toast.error(validationError);
      return;
    }

    setLoading(true);
    
    // console.log(orderData)

    try {
      
      const API_URL = process.env.NEXT_PUBLIC_API_URL || undefined
      const userData: User = await fetchUserData();
      
      const orderData = {
        ...formData,
        customer_id: userData._id,
        productDetails: cart.map(item => ({
          product_id: item.id,
          quantity: item.quantity
        })),
        total,
      };
      
      const response = await fetch(`${API_URL}/api/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error("Failed to place order");
      }

      const result = await response.json();
      
      if (result.success) {
        toast.success("Order placed successfully!");
        clearCart();
        router.push('/');
      } else {
        throw new Error(result.error || "Failed to place order");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error(error instanceof Error ? error.message : "Failed to place order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="w-full font-inter flex justify-center mt-10 items-center bg-gray-50 py-10">
      <div className="max-w-[880px] lg:gap-[120px] md:gap-[70px] sm:gap-[35px] sm:flex-row flex-col mb-24 mx-5 flex items-start bg-white p-8 rounded-lg shadow-lg">
        {/* Left Section - Form */}
        <div className="max-w-[440px] w-full">
          <h2 className="text-2xl font-bold text-[#111111] mb-6">Checkout</h2>

          {/* Delivery Option */}
          <div className="mb-8">
            <h4 className="text-xl font-medium mb-4">Delivery Method</h4>
            <p className="text-[#757575] text-base mb-6">
              Standard delivery time is 3-5 business days. Our courier will contact you to confirm delivery. For Now Payment is available via cash on delivery until the payment gateway is integrated.
            </p>
            <div className="flex gap-6 py-4 items-center rounded-lg px-5 border-[#111111] border-2 bg-gray-50">
              <TbTruckDelivery className="text-2xl" />
              <span className="font-medium">Standard Delivery (Free)</span>
            </div>
          </div>

          {/* Address Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <h4 className="text-xl font-medium">Shipping Information</h4>
            <div className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full border rounded px-4 py-3 text-sm border-[#e5e5e5] focus:outline-none focus:border-[#111111]"
                  placeholder="First Name *"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full border rounded px-4 py-3 text-sm border-[#e5e5e5] focus:outline-none focus:border-[#111111]"
                  placeholder="Last Name *"
                  required
                />
              </div>

              <input
                type="text"
                name="fullAddress"
                value={formData.fullAddress}
                onChange={handleInputChange}
                className="w-full border rounded px-4 py-3 text-sm border-[#e5e5e5] focus:outline-none focus:border-[#111111]"
                placeholder="Full Address *"
                required
              />

              <div className="flex gap-4">
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className="w-1/2 border rounded px-4 py-3 text-sm border-[#e5e5e5] focus:outline-none focus:border-[#111111]"
                  placeholder="Postal Code *"
                  required
                />
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-1/2 border rounded px-4 py-3 text-sm border-[#e5e5e5] focus:outline-none focus:border-[#111111]"
                  placeholder="City *"
                  required
                />
              </div>

              <select
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className="w-full border rounded px-4 py-3 text-sm border-[#e5e5e5] focus:outline-none focus:border-[#111111]"
                required
              >
                <option value="Sindh">Sindh</option>
                <option value="Punjab">Punjab</option>
                <option value="KPK">KPK</option>
                <option value="Balochistan">Balochistan</option>
                <option value="Gilgit Baltistan">Gilgit Baltistan</option>
              </select>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h4 className="text-xl font-medium">Contact Information</h4>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border rounded px-4 py-3 text-sm border-[#e5e5e5] focus:outline-none focus:border-[#111111]"
                placeholder="Email *"
                required
              />
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full border rounded px-4 py-3 text-sm border-[#e5e5e5] focus:outline-none focus:border-[#111111]"
                placeholder="Phone Number (11 digits) *"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-[#111111] text-white w-full py-3 rounded-lg hover:bg-[#333333] transition-colors disabled:bg-gray-400"
              disabled={loading || cart.length === 0}
            >
              {loading ? "Processing..." : `Pay ${formatCurrency(total)}`}
            </button>
          </form>
        </div>

        {/* Right Section - Order Summary */}
        <div className="max-w-[320px] w-full mt-8 sm:mt-0">
          <h2 className="text-2xl font-bold text-[#111111] mb-6">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <p className="text-[#8d8d8d]">Subtotal</p>
              <p className="text-[#111111]">{formatCurrency(subtotal)}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[#8d8d8d]">Shipping</p>
              <p className="text-[#111111]">Free</p>
            </div>
            <div className="flex justify-between border-t pt-4">
              <p className="text-[#111111] font-bold">Total</p>
              <p className="text-[#111111] font-bold">{formatCurrency(total)}</p>
            </div>
          </div>

          {/* Cart Items */}
          <div className="mt-8 space-y-6">
            <h3 className="text-lg font-medium">Order Items ({cart.length})</h3>
            <div className="space-y-4">
              {cart.map((product: CartProducts) => (
                <div key={product.slug} className="flex gap-4 items-center">
                  <Image
                    src={product.image ? urlFor(product.image).url() : "/default-image.png"}
                    alt={product.productName}
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                  <div>
                    <p className="text-[#111111] font-medium">{product.productName}</p>
                    <p className="text-[#8d8d8d] text-sm">Qty: {product.quantity}</p>
                    <p className="text-[#111111] font-bold">
                      {formatCurrency(product.price * product.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;