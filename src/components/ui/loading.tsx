"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Heart, 
  Grid3x3, 
  FileSearch, 
  List 
} from 'lucide-react';

// Define the types for loading context
type LoadingType = 
  | 'product-listing' 
  | 'product-detail' 
  | 'wishlist' 
  | 'cart' 
  | 'default';

// Loading Component Props
interface LoadingProps {
  type?: LoadingType;
  message?: string;
}

export default function Loading({ 
  type = 'default', 
  message 
}: LoadingProps) {
  // Configuration for different loading types
  const loaderConfig = {
    'product-listing': {
      icon: <Grid3x3 className="text-blue-500" size={100} />,
      defaultMessage: "Loading Products...",
      background: "bg-gradient-to-br from-blue-50 to-white"
    },
    'product-detail': {
      icon: <FileSearch className="text-green-500" size={100} />,
      defaultMessage: "Loading Product Details...",
      background: "bg-gradient-to-br from-green-50 to-white"
    },
    'wishlist': {
      icon: <Heart className="text-pink-500" size={100} />,
      defaultMessage: "Loading Wishlist...",
      background: "bg-gradient-to-br from-pink-50 to-white"
    },
    'cart': {
      icon: <ShoppingCart className="text-purple-500" size={100} />,
      defaultMessage: "Loading Cart...",
      background: "bg-gradient-to-br from-purple-50 to-white"
    },
    'default': {
      icon: <List className="text-gray-500" size={100} />,
      defaultMessage: "Loading...",
      background: "bg-gradient-to-br from-gray-50 to-white"
    }
  };

  // Select configuration based on type
  const config = loaderConfig[type] || loaderConfig['default'];

  return (
    <div className={`
      flex flex-col items-center justify-center 
      min-h-screen ${config.background}
    `}>
      {/* Animated Icon */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: [0.8, 1.1, 1], 
          opacity: [0, 1, 1],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="flex items-center justify-center"
      >
        {config.icon}
      </motion.div>

      {/* Loading Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: [0, 1, 0.7, 1], 
          y: [20, 0, 10, 0] 
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity 
        }}
        className="mt-8 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-800">
          {message || config.defaultMessage}
        </h2>
      </motion.div>

      {/* Loading Dots */}
      <motion.div 
        className="mt-6 flex space-x-2"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity 
        }}
      >
        {[...Array(3)].map((_, index) => (
          <div 
            key={index} 
            className="w-3 h-3 bg-gray-500 rounded-full"
          />
        ))}
      </motion.div>
    </div>
  );
}

