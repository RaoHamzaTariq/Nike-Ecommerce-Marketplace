"use client";
import { CartProducts } from "@/data/interfaces";
import React, { createContext, useContext, useState, ReactNode} from "react";

interface CartContextType {
  cart: CartProducts[];
  addToCart: (item: CartProducts) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartProducts[]>([]);

  const addToCart = (item: CartProducts) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (slug: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.slug !== slug));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};